jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
    Map: () => ({}),
}));

jest.mock("./AppData/Api.js");

beforeEach(() => {
    jest.clearAllMocks();
})
