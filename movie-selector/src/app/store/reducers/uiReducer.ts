import { type AppState } from '.'
import { type CustomAction, START_ACTION, STOP_ACTION } from '../actions/uiActions'

export interface UiState {
  loadingActions: CustomAction[]
}

const initialState: UiState = {
  loadingActions: []
}

const uiReducer = (
  state: UiState = initialState,
  { type, payload }: CustomAction
): UiState => {
  const { loadingActions } = state
  switch (type) {
    case START_ACTION:
      return {
        ...state,
        loadingActions: [...loadingActions, payload.action]
      }
    case STOP_ACTION:
      return {
        ...state,
        loadingActions: loadingActions.filter(
          (action: CustomAction) => action.name !== payload.name
        )
      }
    default:
      return state
  }
}

export const checkIfLoading = (store: AppState, ...actionsToCheck: string[]): any =>
  store.ui.loadingActions.some((action: CustomAction) =>
    actionsToCheck.includes(action.name)
  )

export default uiReducer
