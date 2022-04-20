export interface IHttpHook {
     loading: boolean;
     error: string | null;
     url: string;
     method: string;
     body: BodyInit | null | undefined | object;
}
