import { PrismaClient, User } from "@prisma/client";
import { FastifyRequest } from "fastify";
import pubSub from "../pubsub";
import { authenticateUser } from "./auth";

const prisma = new PrismaClient();


