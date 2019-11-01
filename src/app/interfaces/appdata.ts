export interface Worker {
    id:number;
    email:string;
    name:string;
    user_id:number;
}

export interface Mission {
    id:number;
    farm_id:number;
    date:string;
    complete:boolean;
}

export interface WorkerResponse {
    results: Array<Worker>;
}

export interface MissionReponse {
    results: Array<Mission>;
}