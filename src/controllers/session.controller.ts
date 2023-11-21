import { Request, Response } from "express";
import { SessionService } from "../services/session.service";

export class SessionController {
  constructor(private sessionService: SessionService) {}
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.sessionService.create({ email, password });

    return res.json({ token });
  }
}


// constructor(private sessionService: SessionService) {
//   this.sessionService = new SessionService();
// }

// async create(req: Request, res: Response) {
//   try {
//     const { email, password, token } = req.body;

//     if (token) {
//       // If a token is provided, treat it as auto-login
//       const result = await this.sessionService.autoLogin({ token });
//       return res.json(result);
//     }

//     // Otherwise, proceed with regular login
//     const result = await this.sessionService.create({ email, password });
//     res.json(result);
//   } catch (error) {
//     console.log(error)
//   }
// }