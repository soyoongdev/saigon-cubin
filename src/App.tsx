import { Anchor, Flex, Typography } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import { bieuDo1, bieuDo2, bieuDo3 } from "./assets";
import Section from "./components/Section";
import useAppViewModel from "./hooks/useAppViewModel";
import { cn } from "./utils/helpers";

function App() {
  const { images, currentImage, onScrollChange } = useAppViewModel();

  const content = {
    h1: {
      title: "Ánh sáng xanh và Sức khoẻ học đường",
      subTitle: "Mỗi người dân yếu ớt, tức là cả nước yếu ớt. Mỗi người dân khoẻ mạnh, tức là cả nước khoẻ mạnh. (Chủ tịch Hồ Chí Minh)",
    },
    sec1: "Trong thời đại công nghệ số phát triển mạnh mẽ, điện thoại thông minh đã trở thành vật bất ly thân đối với học sinh THPT. Tuy mang lại nhiều tiện ích trong học tập và giải trí, nhưng việc sử dụng điện thoại vào ban đêm – đặc biệt là ánh sáng xanh phát ra từ màn hình – đang ngày càng ảnh hưởng tiêu cực đến giấc ngủ và sức khỏe của học sinh. Nhiều bạn có thói quen thức khuya để lướt mạng xã hội, xem video hay học bài trên điện thoại, dẫn đến tình trạng ngủ muộn, mệt mỏi, giảm tập trung vào ngày hôm sau.",
    sec2: "Khảo sát cho thấy phần lớn học sinh THPT ngủ sau 23h và có thời gian ngủ không đủ 7–8 tiếng mỗi đêm. Nguyên nhân chính là do sử dụng điện thoại trước khi ngủ để truy cập mạng xã hội, chơi game hoặc xem video. Tình trạng này dẫn đến mệt mỏi, buồn ngủ vào buổi sáng, ảnh hưởng nghiêm trọng tới hiệu quả học tập. Dù nhiều em đã biết đến tác hại, nhưng việc thay đổi hành vi vẫn chưa rõ rệt.",
    sec3: "Thế hệ trẻ ngày nay đang đối mặt với một thử thách mới trong kỷ nguyên số: bảo vệ nhịp sinh học và sức khỏe thể chất trước sự tác động ngày càng lớn của ánh sáng xanh từ thiết bị điện tử. Với sự năng động, chủ động tiếp cận công nghệ và khả năng tự thay đổi thói quen, các bạn học sinh THPT hoàn toàn có thể trở thành những người tiên phong trong việc xây dựng lối sống số lành mạnh và khoa học.",
    sec4: "Thói quen tiếp xúc ánh sáng xanh ban đêm làm rối loạn nhịp sinh học, ức chế melatonin và gây khó ngủ. Học sinh dễ ngủ muộn, ngủ không sâu, dẫn đến mệt mỏi, buồn ngủ vào sáng hôm sau. Tình trạng thiếu ngủ kéo dài làm giảm khả năng tập trung, trí nhớ, ảnh hưởng kết quả học tập. Ngoài ra, việc sử dụng thiết bị quá lâu còn gây mỏi mắt, giảm thị lực và tăng nguy cơ rối loạn tâm trạng, tác động tiêu cực tới sức khỏe thể chất lẫn tinh thần.",
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
            <Flex className="w-4/5 flex-col-reverse items-center justify-between md:flex-row gap-5">
              <Flex className="w-[450px] gap-5 bg-white flex-col p-5 rounded-3xl">
                <Flex className=""><img src={bieuDo1} className="h-full w-full" /></Flex>
                <Flex className=""><img src={bieuDo2} className="h-full w-full" /></Flex>
              </Flex>
              <Flex className="w-[450px] rounded-3xl bg-white p-5">
                <Typography.Text className="text-xl text-foreground">
                    <Typography.Text className="text-2xl font-bold italic text-foreground"> <strong><em>Thế Hệ Mất Ngủ Vì Điện Thoại</em></strong></Typography.Text>
                    <br />
                    <br />
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
              <Flex gap={20} vertical>
                <Typography.Text className="text-xl text-foreground lg:mx-[200px] xl:mx-[250px] mx-5">
                <strong><em>a. Ánh sáng xanh và tác động sinh học:</em></strong>
                <br />
                <span className="ml-6">
                  Nghiên cứu của Haghani chỉ ra rằng <strong>ánh sáng xanh ban đêm có khả năng ức
                  chế melatonin – hormone điều hòa giấc ngủ</strong>, từ đó gây rối loạn nhịp sinh học
                  và ảnh hưởng đến sức khỏe tổng thể (Haghani, 2024 NIH).
                </span>
              </Typography.Text>
              <Typography.Text className="text-xl text-foreground lg:mx-[200px] xl:mx-[250px] mx-5">
                <strong><em>b. Nhịp sinh học:</em></strong>
                <br />
                <span className="ml-6">
                  Theo báo cáo của Macharla, tiếp xúc với ánh sáng xanh trong 1–2 giờ trước khi
                  ngủ sẽ <strong>làm chậm chu kỳ sinh học</strong>, dẫn đến mất ngủ, thức khuya và thức dậy
                  trễ, ảnh hưởng đến năng lượng và khả năng tập trung của học sinh (Macharla,
                  2025 Cureus).
                </span>
                </Typography.Text>
                <Typography.Text className="text-xl text-foreground lg:mx-[200px] xl:mx-[250px] mx-5">
                <strong><em>c. Mối liên hệ giữa học sinh và thói quen sử dụng thiết bị:</em></strong>
                <br />
                <span className="ml-6">
                  Nghiên cứu của <em>Yang Chen</em>, học sinh là nhóm dễ bị tổn thương nhất trước ảnh
                  hưởng của mạng xã hội và smartphone. Khi thói quen dùng điện thoại vào ban
                  đêm trở nên phổ biến, nhiều học sinh gặp phải các vấn đề về rối loạn giấc ngủ
                  và tâm lý (<em>Yang Chen</em>, 2024 APA PsycnNet).
                  </span>
              </Typography.Text>
              </Flex>
              <Flex gap={20} className="mx-5 flex-col lg:flex-row">
                <Flex vertical>
                  <Typography.Text className="text-xl italic text-blue">
                    👉 Trong thời gian gần đây, bạn có gặp các vấn đề sau không?
                  </Typography.Text>
                  <img src={bieuDo3} className="h-full w-full object-contain" />
                </Flex>
              </Flex>
              <Typography.Text className="text-xl text-foreground lg:mx-[200px] xl:mx-[250px] mx-5">
                <strong><em>Kết luận: </em></strong>
                Khảo sát cho thấy <em>sự rối loạn nhịp sinh học không chỉ là hiện
                tượng phổ biến mà còn ảnh hưởng rõ rệt đến sức khỏe thể chất và tinh
                thần của học sinh.</em> Đây là một vấn đề đáng báo động và cần được quan tâm
                nghiêm túc trong môi trường học đường.
                Trước thực trạng gia tăng tình trạng rối loạn giấc ngủ và suy giảm sức khỏe do ánh sáng xanh từ điện thoại, việc xây dựng những giải pháp thiết thực là yêu cầu cấp bách. Những đề xuất dưới đây không chỉ hướng tới việc giúp học sinh THPT hình thành thói quen sử dụng thiết bị hợp lý, mà còn tạo sự phối hợp chặt chẽ giữa gia đình, nhà trường và cộng đồng, nhằm bảo vệ nhịp sinh học và nâng cao sức khỏe toàn diện cho thế hệ trẻ.
                <br />
                <span className="ml-6">
                  - <strong>Tự xây dựng thời gian biểu</strong> hợp lý, đi ngủ trước 23h và đảm bảo ngủ đủ từ 7–8 tiếng mỗi đêm, giúp học sinh giữ nhịp sinh học ổn định, đảm bảo hiệu suất học tập và sức khỏe.
                </span>
                <br />
                <span className="ml-6">
                  - <strong>Hạn chế sử dụng điện thoại vào buổi tối</strong>, đặc biệt là trong khoảng 30–60 phút trước khi đi ngủ, làm giảm tác động của ánh sáng xanh đến việc tiết hormone melatonin – chất gây buồn ngủ.
                </span>
                <br />
                <span className="ml-6">
                  - Sử dụng các công cụ quản lý thời gian và ứng dụng hỗ trợ giấc ngủ (chế độ “Night Shift”, “Digital Wellbeing”, “Forest”...).
                </span>
                <br />
                <span className="ml-6">
                  - <strong>Ưu tiên những hoạt động thư giãn</strong> không dùng thiết bị như đọc sách giấy, thiền nhẹ, giúp não bộ được "hạ nhiệt" và dễ dàng đi vào giấc ngủ sâu.
                </span>
                <br />
                <br />
                Ánh sáng xanh từ điện thoại đang âm thầm tác động đến nhịp sinh học, chất lượng giấc ngủ và sức khỏe của học sinh THPT. Việc thay đổi thói quen sử dụng thiết bị, đặc biệt vào buổi tối, là chìa khóa để bảo vệ trí tuệ, thể chất và tinh thần của thế hệ trẻ. Thông qua sự chung tay của học sinh, gia đình, nhà trường và cộng đồng, chúng ta hoàn toàn có thể xây dựng một môi trường sống và học tập lành mạnh, nơi công nghệ được sử dụng một cách thông minh, an toàn và bền vững.
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
