import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../usefetch";

    const expected =  {
            url: 'image1.png',
            date: '2022-01-21',
            explanation: 'explanetion test',
            media_type: 'video',
            title: 'title test'
    };

    const mockedUrl = 'https://api.nasa.gov/planetary/apod?api_key=12345';

// afterEach(() => {
//   global.fetch.mockClear();
// });

// afterAll(() => {
//   global.fetch.mockRestore();
// });

describe("useFetch test", () => {
    // it("should return data after fetch", async () => {
    //     jest.spyOn(global, "fetch").mockImplementation(() =>
    //       Promise.resolve({
    //         json: () => Promise.resolve(mock),
    //       })
    //     );
    //     const { result, waitForNextUpdate } = renderHook(() =>
    //       useFetch(mockedUrl)
    //     );
    //     await waitForNextUpdate();

    //     expect(result.current).toStrictEqual({
    //       loading: false,
    //       data: mock,
    //       error: null,
    //     });
    //   });
    // it("should return data after fetch", async () => {
    //     const expected =  {
    //         url: 'image1.png',
    //         date: '2022-01-21',
    //         explanation: 'explanetion test',
    //         media_type: 'video',
    //         title: 'title test'
    //     };
    //     fetch.mockResponseOnce(JSON.stringify(expected));
    //     const { result, waitForNextUpdate } = renderHook(() => useFetch());
      
    //     await waitForNextUpdate();
      
    //     expect(fetch).toHaveBeenCalledTimes(1)
    //     expect(fetch).toHaveBeenCalledWith(mockedUrl)
      
    //     expect(result.current).toEqual(expected);
    //    });
    // it("initial data state is loading and data empty", () => {
    //     const { result } = renderHook(() => useFetch(mockedUrl));
      
    //     expect(result.current).toStrictEqual({ loading: true, data: null });
    // });
});