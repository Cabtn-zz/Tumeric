import React from 'react';
import Permissions from 'expo'

export async function alertIfRemoteNotificationsDisabledAsync() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    alert('Hey! You might want to enable notifications for my app, they are good.');
  }
}

export async function requestCameraRollPermissions() {
  const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    alert('Hey! You might want to enable cammera roll for my app, they are good.');
  }
}

export default async function requestCameraPermissions() {
  const { status } = await Permissions.getAsync(Permissions.CAMERA);
  if (status !== 'granted') {
    alert('Hey! You might want to enable the camera for my app, cuz you fucking need it.');
  }
}