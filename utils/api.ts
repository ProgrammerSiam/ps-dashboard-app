import { User, UserListResponse } from '@/types/user.types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function fetchUserById(id: number): Promise<User> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw new Error(`Failed to fetch user ${id}`);
  }
}

export function paginateUsers(users: User[], page: number, usersPerPage: number): UserListResponse {
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    totalPages,
    currentPage: page,
  };
}
