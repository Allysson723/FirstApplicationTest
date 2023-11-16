import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const DesktopNotificationPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50_02 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mx-auto w-[65%]"
                src="images/img_group10392.svg"
                alt="Group10392"
              />
              <div className="flex flex-col gap-[41px] justify-start mt-12 w-3/5 md:w-full">
                <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[95%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_save.svg"
                      alt="save"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_dollaraltsoli.svg"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Payments
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_walletoutline.svg"
                      alt="walletOutline"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Transactions
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="mt-1 text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Analytics
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start w-[67%] md:w-full">
                  <Line className="bg-blue-A700 h-6 w-0.5" />
                  <Img
                    className="h-6 ml-1.5 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-2 mt-[5px] text-base text-blue-A700"
                    size="txtGilroySemiBold16BlueA700"
                  >
                    Settings
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_question.svg"
                  alt="question"
                />
                <Text
                  className="mt-[5px] text-base text-blue_gray-700"
                  size="txtOpenSansRomanSemiBold16"
                >
                  Help
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[52px] items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <Text
                  className="mb-0.5 md:mt-0 mt-3.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Settings
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[819px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
              <div className="md:h-8 h-[39px] pt-0.5 relative w-full">
                <div className="absolute bottom-[0] h-8 inset-x-[0] mx-auto w-full">
                  <Line className="absolute bg-gray-300 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                  <div className="absolute flex flex-col gap-3.5 h-full inset-y-[0] justify-start left-[16%] my-auto w-[35%]">
                    <Text
                      className="md:ml-[0] ml-[235px] text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Discovery Settings
                    </Text>
                    <Line className="bg-blue-A700 h-0.5 mr-[258px] w-[31%]" />
                  </div>
                </div>
                <Text
                  className="absolute left-[17%] text-base text-blue-A700 top-[5%]"
                  size="txtGilroyMedium16BlueA700"
                >
                  Notifications
                </Text>
                <Text
                  className="absolute left-[4%] text-base text-blue_gray-400 top-[13%]"
                  size="txtGilroyMedium16"
                >
                  Profile Settings
                </Text>
                <a
                  href="javascript:"
                  className="absolute left-[29%] text-base text-blue_gray-400 top-[13%]"
                >
                  <Text size="txtGilroyMedium16">Privacy</Text>
                </a>
                <Text
                  className="absolute right-[38%] text-base text-blue_gray-400 top-[13%]"
                  size="txtGilroyMedium16"
                >
                  Data Usage
                </Text>
                <Text
                  className="absolute right-[24%] text-base text-blue_gray-400 top-[13%]"
                  size="txtGilroyMedium16"
                >
                  Display & Theme
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-[61%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                size="txtGilroySemiBold28"
              >
                Desktop Notifications
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pt-[3px] w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-1 pb-1">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      Design & Prototype
                    </Text>
                    <div className="flex flex-col font-roboto gap-2.5 items-center justify-start mt-[3px] w-full">
                      <Text
                        className="leading-[20.00px] text-blue_gray-400 text-sm w-full"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-colors font-gilroy text-left text-base font-semibold">
                          Design
                        </span>
                        <span className="text-colors font-gilroy text-left font-medium">
                          {" "}
                          -{" "}
                        </span>
                        <span className="text-colors font-gilroy text-left font-normal">
                          We combine visual principles, data, color, psychology
                          and decades worth of experience to create asthetic
                          interfaces that bring results.
                        </span>
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtRobotoRegular14"
                      >
                        <span className="text-colors font-gilroy text-left text-base font-semibold">
                          Prototype
                        </span>
                        <span className="text-colors font-gilroy text-left font-medium">
                          {" "}
                          -{" "}
                        </span>
                        <span className="text-colors font-gilroy text-left font-normal">
                          We design interactive prototypes for iPhone, iPad,
                          Android & Web.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-6 items-center justify-center mb-[83px] rounded-[3px] w-6"
                    color="blue_A700"
                    size="xs"
                  >
                    <Img
                      className="h-5"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark One"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[31px]">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Product Requirements
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    We help layout the foundation of what you are building.
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[23px] pr-[7px] pt-[7px] w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Development
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    We help design a minimum viable product that has the basic
                    features necessary to satisfy.
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-end mt-6 pr-[7px] pt-[7px] w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18"
                  >
                    Upgrade Insurance
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14"
                  >
                    We will work in gathering requirements making information
                    architecture.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNotificationPage;
