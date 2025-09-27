import { useState } from "react";
import { Link } from "react-router-dom";

interface UserDataObject {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  avatar: string;
}

function TablePageComponent() {
  const [selectedItemsArray, setSelectedItemsArray] = useState<number[]>([]);
  const [sortFieldString, setSortFieldString] = useState<string>("name");
  const [sortDirectionBoolean, setSortDirectionBoolean] =
    useState<boolean>(true);

  const usersDataArray: UserDataObject[] = [
    {
      id: 1,
      name: "Jan Kowalski",
      email: "jan@example.com",
      role: "Admin",
      status: "Aktywny",
      lastLogin: "2024-01-15",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Anna Nowak",
      email: "anna@example.com",
      role: "User",
      status: "Nieaktywny",
      lastLogin: "2024-01-10",
      avatar: "👩‍💻",
    },
    {
      id: 3,
      name: "Piotr Wiśniewski",
      email: "piotr@example.com",
      role: "Moderator",
      status: "Aktywny",
      lastLogin: "2024-01-14",
      avatar: "👨‍🔧",
    },
    {
      id: 4,
      name: "Maria Zielińska",
      email: "maria@example.com",
      role: "User",
      status: "Aktywny",
      lastLogin: "2024-01-13",
      avatar: "👩‍🎨",
    },
    {
      id: 5,
      name: "Tomasz Krawczyk",
      email: "tomasz@example.com",
      role: "Admin",
      status: "Nieaktywny",
      lastLogin: "2024-01-08",
      avatar: "👨‍🚀",
    },
    {
      id: 6,
      name: "Katarzyna Lewandowska",
      email: "katarzyna@example.com",
      role: "User",
      status: "Aktywny",
      lastLogin: "2024-01-12",
      avatar: "👩‍⚕️",
    },
    {
      id: 7,
      name: "Michał Kamiński",
      email: "michal@example.com",
      role: "Moderator",
      status: "Aktywny",
      lastLogin: "2024-01-11",
      avatar: "👨‍🎓",
    },
    {
      id: 8,
      name: "Agnieszka Szymańska",
      email: "agnieszka@example.com",
      role: "User",
      status: "Nieaktywny",
      lastLogin: "2024-01-07",
      avatar: "👩‍🏫",
    },
  ];

  const handleSelectionChangeFunction = (id: number) => {
    if (selectedItemsArray.includes(id)) {
      setSelectedItemsArray(selectedItemsArray.filter((item) => item !== id));
    } else {
      setSelectedItemsArray([...selectedItemsArray, id]);
    }
  };

  const handleSortFunction = (field: string) => {
    if (sortFieldString === field) {
      setSortDirectionBoolean(!sortDirectionBoolean);
    } else {
      setSortFieldString(field);
      setSortDirectionBoolean(true);
    }
  };

  const sortedUsersArray = [...usersDataArray].sort((a, b) => {
    const aValue = a[sortFieldString as keyof UserDataObject];
    const bValue = b[sortFieldString as keyof UserDataObject];

    if (sortDirectionBoolean) {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-[24px] py-[32px] max-w-[1400px]">
        <div className="bg-white/[0.95] backdrop-blur-[10px] rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/[0.2] p-[24px]">
          <div className="flex items-center justify-between mb-[24px]">
            <div className="flex items-center gap-[16px]">
              <Link
                to="/"
                className="p-[8px] text-gray-600 hover:bg-gray-100 rounded-[8px] transition-colors"
              >
                <svg
                  className="w-[24px] h-[24px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </Link>
              <h1 className="text-[32px] font-bold text-gray-800 flex items-center gap-[12px]">
                <svg
                  className="w-[40px] h-[40px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  <circle cx="6" cy="7" r="2" fill="white" />
                  <circle cx="6" cy="12" r="2" fill="white" />
                  <circle cx="6" cy="17" r="2" fill="white" />
                  <path
                    d="M14 8h4v2h-4zM14 13h4v2h-4zM14 18h4v2h-4z"
                    fill="white"
                  />
                </svg>
                Zarządzanie użytkownikami
              </h1>
            </div>
            <div className="flex gap-[8px]">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-[16px] py-[8px] rounded-[8px] transition-colors">
                Dodaj użytkownika
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-[16px] py-[8px] rounded-[8px] transition-colors">
                Eksportuj
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-[16px] py-[8px] rounded-[8px] transition-colors">
                Usuń zaznaczone
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[12px] p-[16px] mb-[16px]">
            <div className="flex items-center gap-[12px]">
              <svg
                className="w-[20px] h-[20px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                placeholder="Szukaj użytkowników..."
                className="flex-1 p-[8px] border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="p-[8px] border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Wszystkie role</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-[12px] text-left border-b border-gray-200">
                    <input
                      type="checkbox"
                      className="w-[16px] h-[16px]"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedItemsArray(
                            usersDataArray.map((user) => user.id)
                          );
                        } else {
                          setSelectedItemsArray([]);
                        }
                      }}
                    />
                  </th>
                  <th
                    className="p-[12px] text-left border-b border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSortFunction("name")}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        className="w-[16px] h-[16px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      Użytkownik
                      {sortFieldString === "name" && (
                        <svg
                          className={`w-[14px] h-[14px] transition-transform ${sortDirectionBoolean ? "rotate-180" : ""}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 14l5-5 5 5z" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="p-[12px] text-left border-b border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSortFunction("email")}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        className="w-[16px] h-[16px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      Email
                      {sortFieldString === "email" && (
                        <svg
                          className={`w-[14px] h-[14px] transition-transform ${sortDirectionBoolean ? "rotate-180" : ""}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 14l5-5 5 5z" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="p-[12px] text-left border-b border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSortFunction("role")}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        className="w-[16px] h-[16px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-2.01L12 2z" />
                      </svg>
                      Rola
                      {sortFieldString === "role" && (
                        <svg
                          className={`w-[14px] h-[14px] transition-transform ${sortDirectionBoolean ? "rotate-180" : ""}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 14l5-5 5 5z" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="p-[12px] text-left border-b border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSortFunction("status")}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        className="w-[16px] h-[16px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                      Status
                      {sortFieldString === "status" && (
                        <svg
                          className={`w-[14px] h-[14px] transition-transform ${sortDirectionBoolean ? "rotate-180" : ""}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 14l5-5 5 5z" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th
                    className="p-[12px] text-left border-b border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleSortFunction("lastLogin")}
                  >
                    <div className="flex items-center gap-[8px]">
                      <svg
                        className="w-[16px] h-[16px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 11H7v-2h10v2z" />
                      </svg>
                      Ostatnie logowanie
                      {sortFieldString === "lastLogin" && (
                        <svg
                          className={`w-[14px] h-[14px] transition-transform ${sortDirectionBoolean ? "rotate-180" : ""}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 14l5-5 5 5z" />
                        </svg>
                      )}
                    </div>
                  </th>
                  <th className="p-[12px] text-left border-b border-gray-200">
                    Akcje
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedUsersArray.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-[12px] border-b border-gray-200">
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px]"
                        checked={selectedItemsArray.includes(user.id)}
                        onChange={() => handleSelectionChangeFunction(user.id)}
                      />
                    </td>
                    <td className="p-[12px] border-b border-gray-200">
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[40px] h-[40px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-[18px]">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {user.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-[12px] border-b border-gray-200 text-gray-700">
                      {user.email}
                    </td>
                    <td className="p-[12px] border-b border-gray-200">
                      <span
                        className={`inline-flex items-center px-[8px] py-[4px] rounded-full text-xs font-medium ${
                          user.role === "Admin"
                            ? "bg-red-100 text-red-800"
                            : user.role === "Moderator"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-[12px] border-b border-gray-200">
                      <span
                        className={`inline-flex items-center gap-[6px] px-[8px] py-[4px] rounded-full text-xs font-medium ${
                          user.status === "Aktywny"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <svg
                          className="w-[12px] h-[12px]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path
                            d="M9 12l2 2 4-4"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-[12px] border-b border-gray-200 text-gray-700">
                      {user.lastLogin}
                    </td>
                    <td className="p-[12px] border-b border-gray-200">
                      <div className="flex gap-[4px]">
                        <button className="p-[6px] text-blue-600 hover:bg-blue-100 rounded-[4px] transition-colors">
                          <svg
                            className="w-[16px] h-[16px]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                          </svg>
                        </button>
                        <button className="p-[6px] text-green-600 hover:bg-green-100 rounded-[4px] transition-colors">
                          <svg
                            className="w-[16px] h-[16px]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          </svg>
                        </button>
                        <button className="p-[6px] text-red-600 hover:bg-red-100 rounded-[4px] transition-colors">
                          <svg
                            className="w-[16px] h-[16px]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-[16px]">
            <div className="text-sm text-gray-700">
              Wyświetlane {sortedUsersArray.length} z {usersDataArray.length}{" "}
              użytkowników
            </div>
            <div className="flex items-center gap-[8px]">
              <button className="p-[8px] text-gray-600 hover:bg-gray-100 rounded-[4px] transition-colors">
                <svg
                  className="w-[16px] h-[16px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <span className="px-[12px] py-[8px] text-sm text-gray-700">
                Strona 1 z 1
              </span>
              <button className="p-[8px] text-gray-600 hover:bg-gray-100 rounded-[4px] transition-colors">
                <svg
                  className="w-[16px] h-[16px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePageComponent;
