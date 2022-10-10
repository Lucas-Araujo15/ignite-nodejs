import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Dani",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Diego",
        // duration: 10
    });

    return response.send();
}