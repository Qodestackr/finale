import { FormEventHandler, useState } from "react";
import {
  Box,
  Burger,
  Button,
  Center,
  Drawer,
  Image,
  MediaQuery,
  Stack,
  Text,
  Title,
  // Input
} from "@mantine/core";
import { Input } from "@mantine/core";

import { DateRangePicker } from "@mantine/dates";
import SliderLabel from "./SliderLabel";

import { IconCalendar, IconSearch } from "@tabler/icons";
import LoginWithGoogleButton from "../common/LoginWithGoogle";
import SigninGoogleAuthComponent from "./GoogleAuth";

interface SidebarProps {
  dateRange: [Date | null, Date | null];
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >;
  minMagnitude: number;
  maxMagnitude: number;
  setMinMagnitude: React.Dispatch<React.SetStateAction<number>>;
  setMaxMagnitude: React.Dispatch<React.SetStateAction<number>>;
  handleFetch: () => void;
}

const Sidebar = ({
  dateRange,
  setDateRange,
  minMagnitude,
  setMinMagnitude,
  maxMagnitude,
  setMaxMagnitude,
  handleFetch,
}: SidebarProps) => {
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("Enviado...");

    if (minMagnitude >= maxMagnitude) {
      setError("Distance Range Start");
      return;
    } else {
      setError("");
    }

    handleFetch();
    setOpened(false); // Close Sidebar
  };

  return (
    <>
      <Burger
        sx={{
          position: "absolute",
          zIndex: 1500,
          left: 10,
          top: 10,
        }}
        size="lg"
        opened={opened}
        onClick={() => setOpened((open) => !open)}
        title={opened ? "Close Sidebar" : "Open Sidebar"}
      />
      <MediaQuery
        smallerThan="xs"
        styles={{
          width: "100%",
          overflow: "scroll",
        }}
      >
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          size="lg"
          padding="md"
          zIndex={1000}
          withCloseButton={false}
        >
          <Stack justify="space-between" sx={{ height: "100%" }}>
            <Box>
              <Text
                align="center"
                sx={{
                  marginBottom: "1rem",
                }}
              >
                {/* Welcome back Yourname  */}
                {/* <LoginWithGoogleButton /> */}
                <SigninGoogleAuthComponent />
              </Text>
              <Title
                order={3}
                align="center"
                sx={{
                  marginBottom: "2rem",
                }}
                style={{
                  color: "green",
                }}
              >
                Search, Filter, and Plan Trip
              </Title>

              {/* <form onSubmit={handleSubmit}>
                <Stack spacing="xl">
                  <SliderLabel
                    id="min-mag-slider"
                    label="Min Magnitude"
                    description="Distance Range Start"
                    error={error}
                    value={minMagnitude}
                    onChangeEnd={setMinMagnitude}
                  />
                  <SliderLabel
                    id="max-mag-slider"
                    label="Max Magnitude"
                    description="Distance Range Start"
                    value={maxMagnitude}
                    onChangeEnd={setMaxMagnitude}
                  />
                  <DateRangePicker
                    icon={<IconCalendar size={16} />}
                    label="Date Range"
                    description="Select dates for a Trip"
                    placeholder="Pick dates range"
                    inputFormat="YYYY-MM-DD"
                    zIndex={1000}
                    value={dateRange}
                    onChange={setDateRange}
                  />
                  <Center>
                    <Button
                      type="submit"
                      fullWidth
                      leftIcon={<IconSearch size={16} />}
                    >
                      Search Routes
                    </Button>
                  </Center>
                </Stack>
              </form> */}

              <form onSubmit={handleSubmit}>
                <Stack spacing="xl">
                  {/* Start Location Input */}
                  <Input
                    placeholder="Start location"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                  />

                  {/* End Location Input */}
                  <Input
                    type="text"
                    // label="End Location"
                    placeholder="Enter end location"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                  />
                  {/* Date Range Picker */}
                  <DateRangePicker
                    icon={<IconCalendar size={16} />}
                    label="Date Range"
                    description="Select dates for a Trip"
                    placeholder="Pick dates range"
                    inputFormat="YYYY-MM-DD"
                    zIndex={1000}
                    value={dateRange}
                    onChange={setDateRange}
                  />

                  {/* Search Button */}
                  <Center>
                    <Button
                      type="submit"
                      fullWidth
                      leftIcon={<IconSearch size={16} />}
                    >
                      Search Routes
                    </Button>
                  </Center>
                </Stack>
              </form>

              <Center>
                <Text
                  style={{
                    color: "rgb(37 99 235)",
                    fontWeight: 900,
                    margin: "10 0",
                  }}
                >
                  OR
                </Text>
              </Center>

              <Center>
                <Button
                  type="submit"
                  fullWidth={true}
                  // leftIcon={<IconSearch size={16} />}
                >
                  PLAN YOUR TRIP
                </Button>
              </Center>
            </Box>
            <Box
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                }}
              >
                <Text align="center" weight="bold">
                  Fourth Year Project: 2023
                </Text>
              </Box>
            </Box>
          </Stack>
        </Drawer>
      </MediaQuery>
    </>
  );
};

export default Sidebar;
