import { Anchor, Flex, Typography } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import { chart1, m1, m2 } from "./assets";
import Section from "./components/Section";
import useAppViewModel from "./hooks/useAppViewModel";
import { cn } from "./utils/helpers";

function App() {
  const { images, currentImage, onScrollChange } = useAppViewModel();

  return (
    <>
      <Flex
        vertical
        className="relative h-full w-full scroll-smooth overflow-hidden"
      >
        <Anchor
          items={images.map((_image, index) => {
            return {
              key: `${index}`,
              href: `#section${index}`,
            } as AnchorLinkItemProps;
          })}
          onChange={onScrollChange}
          targetOffset={200}
        />
        <Flex
          className={cn(
            "fixed bottom-0 left-0 right-0 top-0 z-0 h-screen w-full",
            'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-black before:bg-opacity-25 before:content-[""]'
          )}
        >
          <img src={currentImage} className="h-full w-full object-cover" />
        </Flex>
        <Flex vertical className="z-10">
          <Section id="section0">
            <Flex vertical className="w-2/3" justify="center" align="center">
              <Typography.Text className="text-center text-5xl font-bold text-white">
                6.000 năm bồi lở của hạ nguồn Mekong
              </Typography.Text>
              <Typography.Paragraph
                className="text-center font-tino text-xl text-white
              "
              >
                Từ vùng đất hình thành nhờ quá trình bổi lở, Đồng bằng sông Cửu
                Long đang dần biến mất khi quy luật này đảo chiều hai thập kỷ
                qua. Sạt lở ngày càng thắng thế, trong khi bồi lắng giảm dần.
              </Typography.Paragraph>
            </Flex>
          </Section>
          <Section id="section1">
            <Flex className="w-4/5 items-center justify-center md:justify-end">
              <Flex className="w-[450px] rounded-3xl bg-white p-5">
                <Typography.Text className="text-xl text-foreground">
                  7.000 năm trước, Đồng bằng sông Cửu Long (ĐBSCL) chưa hình
                  thành. Khu vực này khi đó là một vịnh biển nông với mực nước
                  dâng đến Phnom Penh (Campuchia).
                </Typography.Text>
              </Flex>
            </Flex>
          </Section>
          <Section id="section2">
            <Flex className="w-4/5 items-center justify-center md:justify-end">
              <Flex className="w-[450px] rounded-3xl bg-white p-5">
                <Typography.Text className="text-xl text-foreground">
                  Qua thời gian, nước biển rút dần, phù sa từ dòng Mekong bồi
                  tụ. ĐBSCL nhờ đó vươn ra Biển Đông trung bình 16 m/năm, mở
                  rộng theo hướng Cà Mau 26 m/năm.
                </Typography.Text>
              </Flex>
            </Flex>
          </Section>
          <Section id="section3" className="w-full">
            <Flex className="h-full w-full" justify="end" align="center">
              <Flex
                vertical
                gap={20}
                className="h-fit w-full p-10 md:w-[50%] lg:w-[45%]"
              >
                <Flex className="w-full rounded-3xl bg-white">
                  <Typography.Text className="m-5 text-xl text-foreground">
                    Sau 6.000 năm, ĐBSCL trở thành vùng châu thổ lớn thứ ba,
                    nhưng non trẻ nhất thế giới khi các đồng bằng lớn như Bengal
                    (Ấn Độ) và Mississippi (Mỹ) có tuổi đời lên tới hàng trăm
                    triệu năm.
                  </Typography.Text>
                </Flex>
                <Flex gap={20} className="w-full">
                  <Flex
                    vertical
                    gap={10}
                    className="w-1/2"
                    justify="center"
                    align="center"
                  >
                    <img
                      src={m1}
                      className="h-full w-full rounded-full object-cover"
                    />
                    <Typography.Text className="font-tino text-xl text-white">
                      Đồng bằng Mississippi
                    </Typography.Text>
                  </Flex>
                  <Flex
                    vertical
                    gap={10}
                    className="w-1/2"
                    justify="center"
                    align="center"
                  >
                    <img
                      src={m2}
                      className="h-full w-full rounded-full object-cover"
                    />
                    <Typography.Text className="font-tino text-xl text-white">
                      Đồng bằng Bengal
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Section>
          <Section id="section4">
            <Flex className="w-4/5 items-center justify-center md:justify-end">
              <Flex className="w-[450px] rounded-3xl bg-white p-5">
                <Typography.Text className="text-xl text-foreground">
                  Châu thổ sông Cửu Long ngày nay trải dài 13 tỉnh, thành Tây
                  Nam Bộ, với diện tích khoảng 40.000 km2, là nơi sinh sống của
                  17,4 triệu người. Nơi đây chiếm 50% sản lượng lúa gạo, 65%
                  thuỷ sản nuôi trồng, và đóng góp 17% GDP cả nước.
                </Typography.Text>
              </Flex>
            </Flex>
          </Section>
          <Flex
            vertical
            className={cn("w-full bg-white")}
            justify="center"
            align="center"
          >
            <Flex className="lg:w-1/2 w-1/2 lg:p-5 p-2" vertical>
              <Typography.Text className="text-xl text-foreground">
                Ông Nguyễn Văn Thơm, 45 tuổi, ở An Giang nhận mình là người nhạy
                cảm với mọi biến đổi từ dòng Mekong. Gia đình ông từng nhiều năm
                sống tại Biển Hồ Tonle Sap (Campuchia) rồi xuôi dòng di cư về An
                Giang. Nhiều thế hệ sống trên sông, ông thấy rõ 20 năm qua dòng
                sông đã "lạc điệu". <br /> <br /> Năm 2019, khi nghe những người
                bà con ở Campuchia than nguồn cá tôm ngày càng cạn kiệt, còn
                nước hồ Tonle Sap bỗng đổi màu từ nâu sang xanh, ông hiểu ngay
                vấn đề. Sông xanh, tức không còn phù sa nữa, chỉ là dòng nước
                đói. Càng về hạ nguồn, "cơn đói" sẽ càng trầm trọng.
                <br /> <br /> "Tục ngữ Campuchia có câu nơi nào có nước, nơi đó
                có cá. Nhưng dường như vùng đồng bằng này không thật sự còn nước
                nữa", ông tự đúc kết.
                <br /> <br /> Những người dân như ông Thơm sống phụ thuộc vào
                dòng sông, còn con sông lại chịu tác động của thượng nguồn.
                <br /> <br /> Trước năm 1990, trung bình mỗi năm sông Mekong tải
                160 triệu tấn phù sa mịn, lơ lửng trong nước và 30 triệu tấn cát
                sỏi ở đáy sông về ĐBSCL. Đây là nguồn tài nguyên quan trọng bồi
                đắp cho sông, biển và hơn 30.000 km kênh nhân tạo ĐBSCL suốt
                hàng nghìn năm.
                <br /> <br /> Từ một trong những vùng đất màu mỡ nhất thế giới,
                hai thập niên qua, nguồn dinh dưỡng này đang ngày càng cạn kiệt
                khiến vùng châu thổ Cửu Long rơi vào cảnh sạt lở liên miên. Tốc
                độ bồi đắp không theo kịp tình trạng xói lở, hệ quả là vùng đồng
                bằng non trẻ đang teo lại. Suốt hàng nghìn năm, châu thổ này mở
                rộng với tốc độ 16 km2 - khoảng 3.000 sân bóng đá - mỗi năm. Giờ
                đây, cùng khoảng thời gian đó, nó lại mất trung bình 5 km2 đất,
                tương đương 926 sân bóng đá.
                <br /> <br /> "Bên lở bên bồi là quy luật tự nhiên từ ngàn xưa
                trong tiến trình hình thành châu thổ sông Mekong. Song về tổng
                thể, đồng bằng Mekong luôn nở ra do được bồi nhiều hơn", thạc sĩ
                Nguyễn Hữu Thiện, chuyên gia độc lập hơn 20 năm nghiên cứu về
                ĐBSCL, phân tích. <br /> <br />
                Trung bình mỗi năm, phù sa và cát đi được 200 km trên dòng
                Mekong vào mùa lũ, tức tháng 7 đến 9 hàng năm. Mất 20-30 năm,
                các trầm tích này mới đi hết chặng đường 4.400 km từ Trung Quốc
                về Việt Nam. Khi đến hạ lưu, dòng chảy mang theo cát và sỏi sẽ
                vừa bào mòn, vừa bồi đắp bờ sông theo nguyên lý "xói bên bờ lõm,
                bồi bên bờ lồi". Trong khi đó, cát nhỏ, phù sa và bùn mịn nhẹ
                hơn đổ ra biển. Một phần trong số này sẽ lắng xuống ở cửa sông
                giúp mở rộng lãnh thổ, và cũng là lớp "áo giáp" bao bọc vùng
                đồng bằng khỏi tác động gây sạt lở của sóng biển.
                <br /> <br /> Tuy nhiên, quy luật này không còn đúng khi tốc độ
                bồi - lở đạt ngưỡng cân bằng vào năm 1990. Đến 2005, lở đã chiếm
                ưu thế khiến đồng bằng "teo" dần, theo nghiên cứu của Viện Khoa
                học Thuỷ lợi miền Nam (SIWRR).
                <br /> <br />
                <strong>
                  Tốc độ thay đổi đường bờ biển giai đoạn 1990 - 2015
                </strong>
              </Typography.Text>
              <img src={chart1} className="h-full w-full object-contain" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
