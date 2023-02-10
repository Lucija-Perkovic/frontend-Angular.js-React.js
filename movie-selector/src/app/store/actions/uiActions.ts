import { type Action } from 'redux'

/**
 * Actions
 */
export const START_ACTION = 'START_ACTION'
export const STOP_ACTION = 'STOP_ACTION'

export const SHOW_ERROR_TOAST = 'SHOW_ERROR_TOAST'
export const HIDE_ERROR_TOAST = 'HIDE_ERROR_TOAST'

/*
 * Action creators
 */

export const startAction = (name: string, params?: any): any => ({
  type: START_ACTION,
  payload: {
    action: {
      name,
      params
    }
  }
})

export const stopAction = (name: string): any => ({
  type: STOP_ACTION,
  payload: { name }
})

export function showErrorToast (message: string): any {
  return { type: SHOW_ERROR_TOAST, message }
}

export function hideErrorToast (): any {
  return { type: HIDE_ERROR_TOAST }
}

export interface CustomAction extends Action {
  type: string
  [key: string]: any
}
