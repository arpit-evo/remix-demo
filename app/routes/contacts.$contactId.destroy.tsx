import { json, redirect } from "@remix-run/node";
import { deleteContact } from "~/data";
import type { ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  await deleteContact(params.contactId);
  return redirect("/");
};
