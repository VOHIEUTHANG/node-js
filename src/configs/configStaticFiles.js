import express from "express";
export default function configStaticFiles(app) {
  app.use(express.static("public"));
}
