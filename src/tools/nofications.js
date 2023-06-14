import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

export const createNotification = () => NotificationManager.info('The contact already exists in the contact book');