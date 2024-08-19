import { Anchor, Flex, Typography } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import { m1, m2, wes1, wes2 } from "./assets";
import Section from "./components/Section";
import useAppViewModel from "./hooks/useAppViewModel";
import { cn } from "./utils/helpers";

function App() {
  const { images, currentImage, onScrollChange } = useAppViewModel();

  const content = {
    h1: {
      title: "Phát triển bền vững cùng sông Sài Gòn – Giải pháp từ thế hệ trẻ",
      subTitle: "Dòng chảy cuộc sống, linh hồn của thành phố Hồ Chí Minh.",
    },
    sec1: "7.000 năm trước, Đồng bằng sông Cửu Long (ĐBSCL) chưa hình thành. Khu vực này khi đó là một vịnh biển nông với mực nước dâng đến Phnom Penh (Campuchia).",
    sec2: "Qua thời gian, nước biển rút dần, phù sa từ dòng Mekong bồi tụ. ĐBSCL nhờ đó vươn ra Biển Đông trung bình 16 m/năm, mở rộng theo hướng Cà Mau 26 m/năm.",
    sec3: "Sau 6.000 năm, ĐBSCL trở thành vùng châu thổ lớn thứ ba, nhưng non trẻ nhất thế giới khi các đồng bằng lớn như Bengal (Ấn Độ) và Mississippi (Mỹ) có tuổi đời lên tới hàng trăm triệu năm.",
    sec4: "Châu thổ sông Cửu Long ngày nay trải dài 13 tỉnh, thành Tây Nam Bộ, với diện tích khoảng 40.000 km2, là nơi sinh sống của 17,4 triệu người. Nơi đây chiếm 50% sản lượng lúa gạo, 65% thuỷ sản nuôi trồng, và đóng góp 17% GDP cả nước.",
  };

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
                {content.h1.title}
              </Typography.Text>
              <Typography.Paragraph
                className="text-center font-tino text-xl text-white
              "
              >
                {content.h1.subTitle}
              </Typography.Paragraph>
            </Flex>
          </Section>
          <Section id="section1">
            <Flex className="w-4/5 items-center justify-center md:justify-end">
              <Flex className="w-[450px] rounded-3xl bg-white p-5">
                <Typography.Text className="text-xl text-foreground">
                  {content.sec1}
                </Typography.Text>
              </Flex>
            </Flex>
          </Section>
          <Section id="section2">
            <Flex className="w-4/5 items-center justify-center md:justify-end">
              <Flex className="w-[450px] rounded-3xl bg-white p-5">
                <Typography.Text className="text-xl text-foreground">
                  {content.sec2}
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
                    {content.sec3}
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
                  {content.sec4}
                </Typography.Text>
              </Flex>
            </Flex>
          </Section>
          <Flex
            vertical
            className="w-full bg-white py-5"
            justify="center"
            align="center"
          >
            <Flex className="" vertical gap={60}>
              <Typography.Text className="text-xl text-foreground lg:mx-[200px] xl:mx-[250px] mx-5">
                Giải thích thuật ngữ <strong>“Phát triển bền vững"</strong>{" "}
                <br /> <br /> Để làm rõ hơn thuật ngữ trên, Ủy ban Thế giới về
                môi trường và phát triển (WCED) (1987) đã đưa ra khái niệm phát
                triển bền vững là "sự phát triển có thể đáp ứng được những nhu
                cầu hiện tại mà không ảnh hưởng, tổn hại đến những khả năng đáp
                ứng nhu cầu của các thế hệ tương lai..."
              </Typography.Text>
              <Flex gap={20} className="mx-5 flex-col lg:flex-row">
                <Flex vertical>
                  <Typography.Text className="text-xl italic text-blue">
                    👉 Theo bạn, bạn hãy đề xuất giải pháp để bảo vệ môi trường
                    hệ sinh thái của sông Sài Gòn?
                  </Typography.Text>
                  <img src={wes1} className="h-full w-full object-contain" />
                </Flex>
                <Flex vertical>
                  <Typography.Text className="text-xl italic text-blue">
                    👉 Bạn hãy đề xuất những giải pháp khắc phục tình trạng chất
                    lượng nước “suy giảm” của sông Sài Gòn?
                  </Typography.Text>
                  <img src={wes2} className="h-full w-full object-contain" />
                </Flex>
              </Flex>
              <Typography.Text className="text-xl text-foreground lg:mx-[200px] xl:mx-[250px] mx-5">
                - Giới trẻ đề xuất nhiều giải pháp trực tiếp tác động đến môi
                trường sông như: tăng cường vệ sinh, thu gom rác, xây dựng khu
                bảo tồn, khai thác cát hợp lý... Điều này cho thấy giới trẻ có
                mong muốn hành động ngay để cải thiện tình hình. Việc đề xuất
                nâng cao nhận thức, tuyên truyền cho thấy giới trẻ hiểu rõ tầm
                quan trọng của việc thay đổi hành vi của cộng đồng.
                <br />- Giới trẻ nhận thức rõ rằng việc thay đổi hành vi của con
                người là yếu tố quan trọng để cải thiện chất lượng nước. Bên
                cạnh việc nâng cao ý thức, giới trẻ cũng đề xuất các giải pháp
                kỹ thuật như xây dựng hệ thống xử lý nước thải, quản lý rác thải
                hiệu quả.
                <br /> Qua hai biểu đồ, có thể thấy giới trẻ việt nam đã có nhận
                thức rất tốt về vấn đề ô nhiễm sông Sài Gòn và có những đề xuất
                giải pháp rất thiết thực. Điều này cho thấy một thế hệ trẻ có ý
                thức bảo vệ môi trường và mong muốn đóng góp vào việc xây dựng
                một thành phố xanh, sạch, đẹp. <br /> <br />
                <strong> Nâng cao ý thức và trách nhiệm cộng đồng</strong>: vai
                trò của thế hệ trẻ trong việc nâng cao ý thức và trách nhiệm
                cộng đồng là vô cùng quan trọng. Bằng những hoạt động thiết
                thực, những thông điệp truyền thông ý nghĩa, thế hệ trẻ có thể
                tác động đến suy nghĩ và hành động của mọi người xung quanh, góp
                phần lan tỏa tinh thần bảo vệ môi trường, bảo vệ sông Sài Gòn.{" "}
                <br />
                <br /> <strong>Xây dựng mô hình cộng đồng chung tay</strong>:
                thế hệ trẻ có thể tiên phong trong việc xây dựng các mô hình
                cộng đồng chung tay bảo vệ dòng sông. Các hoạt động như thu gom
                rác thải, trồng cây xanh, dọn dẹp vệ sinh bờ sông, tuyên truyền
                vận động người dân… sẽ góp phần nâng cao ý thức trách nhiệm của
                cộng đồng, đồng thời tạo ra những thay đổi tích cực cho môi
                trường. <br />
                <br /> <strong>Kết nối - hợp tác - lan tỏa</strong>: thế hệ trẻ
                có trách nhiệm trọng trong việc kết nối, hợp tác với các tổ
                chức, cá nhân, doanh nghiệp để cùng chung tay bảo vệ dòng sông
                Sài Gòn. Các hoạt động kết nối, chia sẻ thông tin, ý tưởng, tạo
                ra sức lan tỏa rộng rãi trong cộng đồng là yếu tố quan trọng để
                thúc đẩy hành động bảo vệ môi trường. <br />
                <br /> <strong>Tận dụng sức mạnh của mạng xã hội</strong>: các
                nền tảng mạng xã hội là công cụ hiệu quả để lan tỏa thông điệp
                bảo vệ môi trường. Thế hệ trẻ có thể tạo ra các chiến dịch
                truyền thông, các video clip ngắn, các bài viết chia sẻ kinh
                nghiệm để nâng cao nhận thức của cộng đồng.
                <br />
                <br /> Giới trẻ ngày nay đã có xu hướng đã nhận thức tốt về vấn
                đề nhưng vẫn chưa tác động được nhiều đến việc lan tỏa hành vi
                phát triển bền vững cùng sông Sài Gòn. Điều này cho thấy, mặc dù
                ý thức về bảo vệ môi trường đã được nâng cao, nhưng việc chuyển
                đổi nhận thức thành hành động cụ thể vẫn còn nhiều hạn chế. Một
                trong những nguyên nhân chính là do thiếu các cơ hội thực hành
                và động lực để tham gia các hoạt động bảo vệ môi trường. Nhiều
                bạn trẻ muốn đóng góp nhưng chưa biết bắt đầu từ đâu hoặc chưa
                có điều kiện để thực hiện. Nhìn chung, kết quả nghiên cứu chính
                là cơ sở phát triển và định hình các phương pháp, cách thức đem
                phát triển bền vững cùng sông Sài Gòn đến với giới trẻ và từ đó
                lan rộng ra đến các nhóm đối tượng lớn tuổi hơn.
              </Typography.Text>
              <Flex justify="end" className="lg:mx-[200px] xl:mx-[250px] mx-5">
                <Typography.Text className="text-xl font-bold">
                  Dương Đình Huy
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
