import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { useFetchUsers } from "../../src/hooks/useFetchUsers";
import { mockUsers } from "../../__mocks__/mockUsers";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useFetchUsers Hook", () => {
  it("should fetch users and update the state", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockUsers });

    const { result } = renderHook(() => useFetchUsers());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.users).toEqual([]);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.error).toBe(null);
  });

  it("should handle API errors", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mockedAxios.get.mockRejectedValue(new Error("API Error"));

    const { result } = renderHook(() => useFetchUsers());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.error).toBe(
      "Ocorreu um erro ao carregar os usuários"
    );
    expect(result.current.users).toEqual([]);

    consoleErrorSpy.mockRestore();
  });

  it("should set isLoading true during the API call", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockUsers });

    const { result } = renderHook(() => useFetchUsers());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });
});
