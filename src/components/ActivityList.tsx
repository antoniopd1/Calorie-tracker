import {  Dispatch } from "react"

import { Activity } from "../types"
import {PencilSquareIcon, XCircleIcon} from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activity-reducer"


type ActivityListProps = {
    activities: Activity[]
    dispatch: Dispatch< ActivityActions>
}

export default function ActivityList({activities, dispatch}:ActivityListProps) {


  return (
    <>
        <h1 className="font-bold text-4xl text-slate-600 text-center">Comida y Actividades</h1>

        {activities.length === 0 ? <p className=" my-5 text-center">No hay actividades aún...</p> : ''}

        {activities.map(activity =>(
            <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                <div className="space-y-2 relative">
                    <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold
                        ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`
                    }>
                        {activity.category === 1 ? 'Comida' : 'Ejercicio'}
                    </p>
                    <p className="text-2xl font-bold pt-5">{activity.name}</p>
                    <p className="font-black text-4xl text-lime-400">
                        {activity.calories}{' '}
                        <span>Calorias</span>
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <button>
                        <PencilSquareIcon
                            className="h-8 w-8 text-gray-800 cursor-pointer hover:text-amber-300"
                            onClick={()=> dispatch({type:"set-activeId" , payload : {id: activity.id}})}
                        />
                    </button>
                    <button>
                        <XCircleIcon
                            className="h-8 w-8 text-red-600 cursor-pointer hover:text-red-700"
                            onClick={()=> dispatch({type:"delete-activity" , payload : {id: activity.id}})}
                        />
                    </button>
                </div>
            </div>
        ))}
    </>
  )
}
