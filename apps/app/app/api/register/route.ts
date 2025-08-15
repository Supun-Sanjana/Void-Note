import { userRegister } from "@/lib/controllers/UserController";

// in app router we can't use `req, res ` directly so you'd adapt it:
export async function POST(request: Request) {
  const body = await request.json();

  // {status:(code:number) --> status is a property on res that’s a function.
  const res = {
    status: (code: number) => ({
      json: (data: any) => Response.json(data, { status: code }),
    }),
  };
  return userRegister({ method: "POST", body }, res);
  
}
