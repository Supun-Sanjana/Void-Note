import { userLogin } from "@/lib/controllers/UserController";

export async function POST(request:Request){
    const body = await request.json();

    // {status:(code:number) --> status is a property on res that’s a function.
      const res = {
        status: (code: number) => ({
          json: (data: any) => Response.json(data, { status: code }),
        }),
      };
      return userLogin({ method: "POST", body }, res);
}