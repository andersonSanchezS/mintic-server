import { Schema, model } from 'mongoose'

export interface IOffer {
    description  : string,
    discount     : string,
    categories   : string
}