export type UserRole = 'Super Admin' | 'Admin' | 'Tuyển sinh' | 'Tư vấn' | 'Editor';
export type UserStatus = 'Hoạt động' | 'Chờ kích hoạt' | 'Bị khóa';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
  initials?: string;
}

export const MOCK_USERS: User[] = [
  {
    id: 'VA-00124',
    name: 'Nguyễn Văn An',
    email: 'an.nv@vietacademy.edu.vn',
    role: 'Super Admin',
    status: 'Hoạt động',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'VA-00156',
    name: 'Trần Hoàng Thu',
    email: 'thu.th@vietacademy.edu.vn',
    role: 'Tuyển sinh',
    status: 'Chờ kích hoạt',
    initials: 'HT',
  },
  {
    id: 'VA-00102',
    name: 'Lê Minh Quân',
    email: 'quan.lm@vietacademy.edu.vn',
    role: 'Tư vấn',
    status: 'Bị khóa',
    avatarUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'VA-00189',
    name: 'Bùi Anh Phương',
    email: 'phuong.ma@vietacademy.edu.vn',
    role: 'Editor',
    status: 'Hoạt động',
    initials: 'BP',
  },
];
