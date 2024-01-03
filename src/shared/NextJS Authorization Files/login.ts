/* /pages/api/login.ts */
import { NextApiRequest, NextApiResponse } from "next";
import { CustomApi } from "@/services";
import { parseJwt } from "~/shared/lib/token";


const handlerLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const nowUnix = (+new Date() / 1e3) | 0;
  const CustomerApi = new CustomApi();

  try {
    const { access_token, refresh_token } =
      await CustomerApi.customerSignInRequestWrapper({
        body: JSON.parse(req.body),
      });
    const access_token_decoded: { exp: number } = parseJwt(access_token);
    const refresh_token_decoded: { exp: number } = parseJwt(refresh_token);

    res.setHeader("Set-Cookie", [
      `token=${access_token}; Max-Age=${
        access_token_decoded.exp - nowUnix
      }; Path=/`,
      `refresh_token=${refresh_token}; Max-Age=${
        refresh_token_decoded.exp - nowUnix
      }; Path=/; HttpOnly=true`,
    ]);

    res.send({ refresh_token });
  } catch (e) {
    res.status(401);
    res.send({ message: "error_while_login" });
  }
};

export default handlerLogin;
