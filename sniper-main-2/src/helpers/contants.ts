import fetch from "node-fetch";

export const SNIPER_GUILD_ID = "1082075245114040443";
export const SNIPER_SELF_TOKEN = "MTA0ODI4NDY2ODUxNDAyMTQzOA.GTHf_u.n_OtNxkaWwfTKgxyxPeBfS4R9qXP5Rd_inHdms"
export const URL_SNIPER_SELF_TOKEN = "MTA0ODI4NDY2ODUxNDAyMTQzOA.GTHf_u.n_OtNxkaWwfTKgxyxPeBfS4R9qXP5Rd_inHdms";
export const WEBHOOKS = {
  SUCCESS: async (content: string) => {
    await fetch(
      `https://ptb.discord.com/api/webhooks/1083114061035753473/v3eT6CkpDFdQ8iDxvQsiQtQx36hvN4_yiVM6-Ujq3SqynuVhdPfzq8edcLT6ci_XRQeX`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "SUCCESS",
        }),
      }
    );
  },
  INFO: async (content: string) => {
    await fetch(
      `https://ptb.discord.com/api/webhooks/1083114061035753473/v3eT6CkpDFdQ8iDxvQsiQtQx36hvN4_yiVM6-Ujq3SqynuVhdPfzq8edcLT6ci_XRQeX`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "INFO",
        }),
      }
    );
  },

  FAIL: async (content: string) => {
    await fetch(
      `https://ptb.discord.com/api/webhooks/1083114061035753473/v3eT6CkpDFdQ8iDxvQsiQtQx36hvN4_yiVM6-Ujq3SqynuVhdPfzq8edcLT6ci_XRQeX`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "FAIL",
        }),
      }
    );
  },
};
