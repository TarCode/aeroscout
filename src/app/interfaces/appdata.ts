export interface Worker {
    id:number;
    email:string;
    name:string;
    user_id:number;
}

export interface Mission {
    id:number;
    farm_id:number;
    title:string;
    date:string;
    complete:boolean;
}

export interface WorkerResponse {
    results: Array<Worker>;
}

export interface MissionReponse {
    results: Array<Mission>;
}

export interface SetWorkerFunc {
    (job_id:number, worker:Worker): null;
}