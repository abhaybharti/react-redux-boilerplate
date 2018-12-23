// src/actions/index.js
import { ADD_ARTICLE } from "../constants/action-type";

export function addArticle(payload) {
  console.log("Inside Action");
  return { type: ADD_ARTICLE, payload };
}