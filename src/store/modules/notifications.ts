import { INotification, RootState } from "@/interfaces/interfaces";
import { ActionTree } from "vuex";

export const namespaced = true;

export const state = {
  notifications: [],
};

export interface notificationStateType {
  notifications: INotification[];
}

let id = 1;
export const mutations = {
  PUSH(s: notificationStateType, notification: INotification) {
    s.notifications.push({
      ...notification,
      id: id++,
    });
  },
  DELETE(s: notificationStateType, notification: INotification) {
    s.notifications = s.notifications.filter((n) => n.id !== notification.id);
  },
};

export const actions: ActionTree<notificationStateType, RootState> = {
  add({ commit }, notification: INotification) {
    commit("PUSH", notification);
  },
  remove({ commit }, notification: INotification) {
    commit("DELETE", notification);
  },
};
