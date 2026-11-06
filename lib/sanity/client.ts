import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

/** Created on demand: createClient throws if projectId is empty. */
export function getSanityClient() {
  return createClient({ projectId, dataset, apiVersion, useCdn: true });
}
