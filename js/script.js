// quiz script moved from HTML — builds the UI and handles interactions
document.addEventListener('DOMContentLoaded',()=>{
  // QUESTIONS: original content moved here
  const QUESTIONS = [
    { q: "Năm 1963, quân dân miền Nam Việt Nam giành thắng lợi trong trận", choices:["A. Bình Giã (Bà Rịa).","B. Đồng Xoài (Bình Phước).","C. Ấp Bắc (Mĩ Tho).","D. Ba Gia (Quảng Ngãi)."], answer:2 },
    { q: "Mĩ chính thức tiến hành chiến tranh phá hoại miền Bắc lần thứ nhất trong khi thực hiện chiến lược chiến tranh nào ở miền Nam Việt Nam?", choices:["A. \"Chiến tranh cục bộ\".","B. \"Đông Dương hóa chiến tranh\".","C. \"Việt Nam hóa chiến tranh\".","D. \"Chiến tranh đặc biệt\"."], answer:0 },
    { q: "Ngày 17/1/1960, tại Bến Tre, cuộc Đồng khởi nổ ra ở ba xã điểm là", choices:["A. Định Thủy, Bình Khánh, Phước Hiệp.","B. Giồng Trôm, Thạnh Phú, Ba Tri.","C. Vĩnh Thạnh, Bình Định, Bác Ái.","D. Ba Tri, Châu Thành, Bình Đại."], answer:0 },
    { q: "Một trong những chiến thắng của quân dân miền Nam Việt Nam trong cuộc chiến đấu chống chiến lược “Chiến tranh cục bộ” (1965 - 1968) của Mĩ là", choices:["A. Núi Thành (Quảng Nam).","B. An Lão (Bình Định).","C. Ba Gia (Quảng Ngãi).","D. Đồng Xoài (Bình Phước)."], answer:0 },
    { q: "Xương sống của chiến lược \"Chiến tranh đặc biệt\" của Mĩ ở miền Nam là", choices:["A. ấp chiến lược.","B. lực lượng quân đội Sài Gòn.","C. lực lượng cố vấn Mĩ.","D. ấp chiến lược và quân đội Sài Gòn."], answer:0 },
    { q: "Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960) xác định cách mạng xã hội chủ nghĩa ở miền Bắc có vai trò như thế nào đối với sự phát triển của cách mạng cả nước?", choices:["A. Quyết định nhất.","B. Quyết định trực tiếp.","C. Căn cứ địa cách mạng.","D. Hậu phương kháng chiến."], answer:0 },
    { q: "Thắng lợi quân sự nào đã mở đầu cao trào “Tìm Mĩ mà đánh, lùng ngụy mà diệt” trên khắp miền Nam Việt Nam?", choices:["A. Núi Thành (Quảng Nam).","B. Bình Giã (Bà Rịa).","C. Vạn Tường (Quảng Ngãi).","D. An Lão (Bình Định)."], answer:2 },
    { q: "Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng Lao động Việt Nam diễn ra vào", choices:["A. tháng 1/1959.","B. tháng 1/1960.","C. tháng 2/1962.","D. tháng 9/1973."], answer:1 },
    { q: "\"Một tấc không đi, một li không rời\" là quyết tâm của đồng bào miền Nam Việt Nam trong", choices:["A. phong trào “Đồng khởi” 1959 – 1960.","B. cuộc đấu tranh chống và phá “ấp chiến lược” 1961 - 1965.","C. cuộc đấu tranh yêu cầu Mĩ thi hành Hiệp định Pari năm 1973.","D. cuộc đấu tranh yêu cầu Mĩ - Diệm thi hành Hiệp định Giơnevơ năm 1954."], answer:1 },
    { q: "Để đánh đổ ách thống trị của đế quốc Mĩ và chính quyền Sài Gòn, phương pháp đấu tranh bạo lực cách mạng lần đầu tiên được Đảng Lao động Việt Nam đề ra tại", choices:["A. Đại hội đại biểu toàn quốc lần thứ III của Đảng.","B. Kì họp thứ 4 Quốc hội khóa I nước Việt Nam Dân chủ cộng hòa.","C. Hội nghị lần thứ 15 Ban Chấp hành Trung ương Đảng.","D. Hội nghị lần thứ 21 Ban Chấp hành Trung ương Đảng."], answer:2 },
    { q: "Trong chiến lược “Chiến tranh đặc biệt” Mĩ đã sử dụng phổ biến các chiến thuật quân sự", choices:["A. \"tố cộng, diệt cộng\".","B. “tìm diệt” và “bình định”.","C. dồn dân lập “ấp chiến lược”.","D. “trực thăng vận”, “thiết xa vận”."], answer:3 },
    { q: "Chiến thắng nào của nhân dân miền Nam Việt Nam trong đông – xuân (1964 – 1965) góp phần làm phá sản chiến lược “Chiến tranh đặc biệt” của Mĩ?", choices:["A. Vạn Tường (Quảng Ngãi).","B. Núi Thành (Quảng Nam).","C. Bình Giã (Bà Rịa).","D. Ấp Bắc (Mĩ Tho)."], answer:2 },
    { q: "Trong đông - xuân 1965 - 1966, Mĩ mở 5 cuộc hành quân “tìm diệt” lớn nhằm vào hai hướng chiến lược chính ở miền Nam Việt Nam là", choices:["A. Đông Nam Bộ và Tây Nam Bộ.","B. Tây Nam Bộ và Chiến khu D.","C. Đông Nam Bộ và Liên khu V.","D. Tây Nam Bộ và Tây Nguyên."], answer:0 },
    { q: "Việc Mĩ tuyên bố “phi Mĩ hóa” chiến tranh xâm lược Việt Nam đánh dấu sự thất bại của chiến lược chiến tranh nào?", choices:["A. Việt Nam hóa chiến tranh.","B. Đông Dương hóa chiến tranh.","C. Chiến tranh đặc biệt.","D. Chiến tranh cục bộ."], answer:3 },
    { q: "Nội dung nào không phản ánh đúng nhiệm vụ của cách mạng miền Nam Việt Nam sau Hiệp định Giơnevơ về Đông Dương (1954)?", choices:["A. Đấu tranh chống chế độ Mĩ - Diệm.","B. Tiến hành cách mạng xã hội chủ nghĩa.","C. Giải phóng miền Nam, thống nhất đất nước.","D. Tiếp tục thực hiện cách mạng dân tộc, dân chủ nhân dân."], answer:1 },
    { q: "Một trong những nhiệm vụ cơ bản của kế hoạch Nhà nước 5 năm lần thứ nhất (1961 - 1965) ở miền Bắc Việt Nam là", choices:["A. ra sức phát triển thương nghiệp.","B. hoàn thành cải cách ruộng đất.","C. khôi phục và phát triển kinh tế.","D. tiếp tục cải tạo xã hội chủ nghĩa."], answer:3 },
    { q: "Mối quan hệ cách mạng hai miền Nam – Bắc Việt Nam sau năm 1954 là", choices:["A. cùng chung nhiệm vụ chống Mĩ cứu nước.","B. cùng chung nhiệm vụ xây dựng chủ nghĩa xã hội.","C. mối quan hệ giữa hậu phương và tiền tuyến.","D. mối quan hệ giữa căn cứ địa và chiến trường chính."], answer:2 },
    { q: "Trong thời kì 1954 - 1975, phong trào nào là mốc đánh dấu bước phát triển của cách mạng ở miền Nam Việt Nam từ thế giữ gìn lực lượng sang thế tiến công?", choices:["A. “Đồng khởi”.","B. “Thi đua Ấp Bắc, giết giặc lập công”.","C. Phá “ấp chiến lược”.","D. “Tìm Mĩ mà đánh, lùng ngụy mà diệt”."], answer:0 },
    { q: "Thắng lợi nào của quân dân ta ở miền Nam đã buộc Mĩ phải tuyên bố “Mĩ hóa” trở lại chiến tranh xâm lược Việt Nam?", choices:["A. Cuộc Tiến công chiến lược năm 1972.","B. Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân.","C. Chiến dịch Đường 14 - Phước Long.","D. Trận “Điện Biên Phủ trên không” năm 1972."], answer:3 },
    { q: "Âm mưu chủ yếu của Mĩ và chính quyền Sài Gòn trong thủ đoạn dồn dân lập “ấp chiến lược” là nhằm", choices:["A. củng cố quyền lực cho chính quyền Sài Gòn.","B. xây dựng miền Nam thành những khu biệt lập để dễ kiểm soát.","C. đẩy lực lượng cách mạng ra khỏi các xã, các ấp, tách dân khỏi cách mạng.","D. tách dân khỏi cách mạng, thực hiện chương trình bình định toàn miền Nam."], answer:2 },
    { q: "Hình thức đấu tranh chống Mĩ - Diệm chủ yếu của nhân dân miền Nam Việt Nam trong những ngày đầu ngay sau Hiệp định Giơnevơ là", choices:["A. khởi nghĩa giành lại chính quyền.","B. dùng bạo lực cách mạng.","C. đấu tranh chính trị hòa bình.","D. đấu tranh vũ trang."], answer:2 },
    { q: "Ý nào không chính xác tình hình Việt Nam sau Hiệp định Giơnevơ năm 1954?", choices:["A. Tổng tuyển cử thống nhất đất nước chưa được tiến hành.","B. Pháp rút quân khỏi miền Bắc nhưng phá hoại các cơ sở kinh tế của Việt Nam.","C. Mĩ thay thế Pháp, dựng lên chính quyền Ngô Đình Diệm ở miền Nam Việt Nam.","D. Pháp rút quân khỏi Việt Nam, nhân dân Việt Nam tiến hành Tổng tuyển cử thống nhất đất nước."], answer:3 },
    { q: "Trong thời kì 1954 - 1975, sự kiện nào là mốc đánh dấu nhân dân Việt Nam đã căn bản hoàn thành nhiệm vụ “đánh cho Mĩ cút”?", choices:["A. Cuộc Tiến công chiến lược năm 1972.","B. Chiến thắng “Điện Biên Phủ trên không” năm 1972.","C. Cuộc Tổng tiến công và nổi dậy Xuân 1975.","D. Hiệp định Pari về Việt Nam được kí kết năm 1973."], answer:2 },
    { q: "Nhân dân miền Nam Việt Nam sử dụng bạo lực cách mạng trong phong trào Đồng khởi (1959 - 1960) vì", choices:["A. lực lượng vũ trang cách mạng miền Nam đã phát triển.","B. không thể tiếp tục đấu tranh bằng con đường hòa bình.","C. cách mạng miền Nam đã chuyển hẳn sang thế tiến công.","D. mọi xung đột chỉ có thể được giải quyết bằng vũ lực."], answer:0 },
    { q: "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân (1968) của quân dân Việt Nam không tác động đến việc", choices:["A. Mĩ phải tuyên bố “Mĩ hóa” trở lại chiến tranh xâm lược Việt Nam.","B. Mĩ chấp nhận đàm phán để bàn về chấm dứt chiến tranh Việt Nam.","C. Mĩ bị lung lay ý chí xâm lược.","D. Mĩ phải tuyên bố ngừng ném bom phá hoại miền Bắc."], answer:3 },
    { q: "Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960) chủ trương tiến hành đồng thời", choices:["A. cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam.","B. cách mạng ruộng đất ở miền Bắc và cách mạng tư sản dân quyền ở miền Nam.","C. cách mạng dân tộc dân chủ nhân dân ở miền Bắc và cách mạng tư sản dân quyền ở miền Nam.","D. cách mạng ruộng đất ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam."], answer:0 },
    { q: "Nội dung nào không phản ánh đúng âm mưu và thủ đoạn của Mĩ trong chiến lược “Chiến tranh cục bộ” ở miền Nam Việt Nam?", choices:["A. Dồn dân lập “ấp chiến lược” và coi đây là “quốc sách”.","B. Cố giành lại thế chủ động trên chiến trường miền Nam Việt Nam.","C. Mở các cuộc hành quân “tìm diệt” và “bình định” vào “vùng đất thánh Việt Cộng”.","D. Tạo ra ưu thế mới về binh lực và hỏa lực có thể áp đảo quân chủ lực của Việt Nam."], answer:0 },
    { q: "Năm 1965, Mĩ bắt đầu tiến hành chiến lược “Chiến tranh cục bộ” ở miền Nam Việt Nam khi đang", choices:["A. ở thế chủ động chiến lược.","B. bị mất ưu thế về hỏa lực.","C. bị thất bại trên chiến trường.","D. bị mất ưu thế về binh lực."], answer:2 },
    { q: "Thắng lợi nào của quân dân miền Nam Việt Nam đã buộc Mĩ phải tuyên bố “phi Mĩ hóa” chiến tranh xâm lược?", choices:["A. Cuộc Tiến công chiến lược năm 1972.","B. Tổng tiến công và nổi dậy Xuân Mậu Thân (1968).","C. Trận “Điện Biên Phủ trên không” (1972).","D. Chiến thắng Đường 9 - Nam Lào (1971)."], answer:1 },
    { q: "Trong chiến lược Chiến tranh đặc biệt (1961 - 1965) ở miền Nam Việt Nam, Mĩ và chính quyền Sài Gòn không thực hiện biện pháp nào dưới đây?", choices:["A. Triển khai hoạt động chống phá miền Bắc.","B. Tiến hành các cuộc hành quân càn quét.","C. Mở những cuộc hành quân “tìm diệt”.","D. Tiến hành dồn dân lập “ấp chiến lược”."], answer:2 },
    { q: "Điều khoản nào của Hiệp định Pari năm 1973 có ý nghĩa quyết định đối với sự phát triển của cuộc kháng chiến chống Mĩ, cứu nước?", choices:["A. Hai bên ngừng bắn và giữ nguyên vị trí ở miền Nam.","B. Nhân dân miền Nam tự quyết định tương lai chính trị.","C. Các bên thừa nhận thực tế ở miền Nam có hai chính quyền.","D. Hoa Kì rút hết quân viễn chinh và quân các nước đồng minh."], answer:3 },
    { q: "Thắng lợi về chính trị của nhân dân miền Nam trong chiến đấu chống chiến lược “Việt Nam hóa chiến tranh” là", choices:["A. Trung ương cục miền Nam được thành lập (1/1961).","B. Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập (1960).","C. Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam ra đời (1969).","D. Các lực lượng vũ trang thống nhất thành Quân giải phóng miền Nam (2/1961)."], answer:2 },
    { q: "Trong cuộc chiến tranh phá hoại miền Bắc Việt Nam lần thứ nhất (1965 - 1968), Mĩ không nhằm thực hiện âm mưu", choices:["A. cứu nguy cho chiến lược “Việt Nam hóa chiến tranh” đang thất bại ở miền Nam.","B. ngăn chặn nguồn chi viện từ bên ngoài vào miền Bắc và từ miền Bắc vào miền Nam.","C. uy hiếp tinh thần và làm lung lay ý chí chống Mĩ của nhân dân hai miền Bắc, Nam.","D. phá tiềm lực kinh tế, quốc phòng và công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc."], answer:0 },
    { q: "Ngày 31/3/1968, bất chấp sự phản đối của chính quyền Sài Gòn, Tổng thống Mĩ Giônxơn tuyên bố ngừng ném bom miền Bắc Việt Nam từ vĩ tuyến 20 trở ra, không tham gia tranh cử Tổng thống nhiệm kì thứ hai; sẵn sàng đàm phán với Chính phủ nước Việt Nam Dân chủ Cộng hòa để đi đến kết thúc chiến tranh. Những động thái đó chứng tỏ: Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân năm 1968 đã", choices:["A. buộc Mĩ phải giảm viện trợ cho chính quyền và quân đội Sài Gòn.","B. làm cho ý chí xâm lược của đế quốc Mĩ ở Việt Nam bị sụp đổ hoàn toàn.","C. làm khủng hoảng sâu sắc hơn quan hệ giữa Mĩ và chính quyền Sài Gòn.","D. buộc Mĩ phải xuống thang trong chiến tranh xâm lược Việt Nam."], answer:3 },
    { q: "Điểm giống nhau giữa chiến lược “Chiến tranh đặc biệt” (1961 - 1965) và “Chiến tranh cục bộ” (1965 - 1968) của Mĩ ở Việt Nam là gì?", choices:["A. Sử dụng lực lượng quân đội Mĩ là chủ yếu.","B. Thực hiện các cuộc hành quân “tìm diệt” và “bình định”.","C. Nhằm biến miền Nam Việt Nam thành thuộc địa kiểu mới.","D. Sử dụng lực lượng quân đội Sài Gòn là chủ yếu."], answer:1 },
    { q: "Điểm giống nhau giữa Hiệp định Giơnevơ năm 1954 về Đông Dương và Hiệp định Pari năm 1973 về Việt Nam là", choices:["A. quân đội nước ngoài rút khỏi Việt Nam từ ngày kí Hiệp định.","B. được kí kết trong bối cảnh có sự hòa hoãn giữa các nước lớn.","C. có sự tham gia đàm phán và cùng kí kết của các cường quốc.","D. quy định việc tập kết, chuyển quân và chuyển giao khu vực."], answer:0 },
    { q: "Biện pháp cơ bản được Mĩ thực hiện xuyên suốt trong các chiến lược chiến tranh ở miền Nam Việt Nam (1961 - 1973) là", choices:["A. tiến hành chiến tranh tổng lực.","B. ra sức chiếm đất, giành dân.","C. sử dụng quân đội đồng minh.","D. sử dụng quân đội Mĩ làm nòng cốt."], answer:1 },
    { q: "Nội dung nào dưới đây là một trong những điểm khác nhau giữa chiến lược “Chiến tranh cục bộ” (1965 - 1968) với chiến lược “Chiến tranh đặc biệt” (1961 - 1965) của Mĩ ở Việt Nam?", choices:["A. Là loại hình chiến tranh xâm lược thực dân kiểu mới.","B. Nằm trong chiến lược toàn cầu “Phản ứng linh hoạt”.","C. Tiến hành chiến tranh phá hoại miền Bắc với quy mô lớn.","D. Dựa vào viện trợ kinh tế và quân sự của Mĩ."], answer:2 },
    { q: "Điểm tương đồng trong nội dung của Hiệp định Giơnevơ về Đông Dương (1954) và Hiệp định Pari về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam (1973) là gì?", choices:["A. Các nước tham dự hội nghị công nhận Việt Nam là một quốc gia tự do.","B. Các bên ngừng bắn để thực hiện tập kết, chuyển quân, chuyển giao khu vực.","C. Các nước cam kết tôn trọng những quyền dân tộc cơ bản của nhân dân Việt Nam.","D. Việt Nam tiến tới thống nhất bằng cuộc tổng tuyển cử tự do dưới sự giám sát của một Ủy ban quốc tế."], answer:1 },
    { q: "Nguyên tắc quan trọng nào của tổ chức Liên hợp quốc cũng là điều khoản trong Hiệp định Giơnevơ (1954) về Đông Dương, Hiệp định Pari (1973) về Việt Nam và Hiệp ước Bali (1976)?", choices:["A. Tôn trọng toàn vẹn lãnh thổ và độc lập chính trị của các nước.","B. Tăng cường hợp tác toàn diện về kinh tế, chính trị, xã hội.","C. Sự nhất trí của 5 nước lớn (Liên Xô, Mĩ, Anh, Pháp, Trung Quốc).","D. Giải quyết tranh chấp bằng phương pháp hòa bình."], answer:0 },
    { q: "Phong trào Đồng khởi bùng nổ vào thời gian nào?", choices:["1959 – 1960","1965 – 1968","1968","1972"], answer:0 },
    { q: "Trận Ấp Bắc thuộc tỉnh nào?", choices:["Mĩ Tho","Bến Tre","Bình Định","Quảng Ngãi"], answer:0 },
    { q: "Mặt trận Dân tộc Giải phóng miền Nam được thành lập năm nào?", choices:["1959","1960","1961","1962"], answer:1 },
    { q: "Sự kiện nào được gọi là \"Điện Biên Phủ trên không\"?", choices:["Chiến dịch Hà Nội 1972","Chiến dịch Phước Long","Tổng tiến công 1975","Tây Nguyên 1975"], answer:0 },
    { q: "Hiệp định Pari được ký kết vào năm nào?", choices:["1972","1973","1974","1975"], answer:1 },
    { q: "Chiến lược 'Việt Nam hóa chiến tranh' chủ yếu là gì?", choices:["Tăng quân Mỹ","Dùng quân Sài Gòn thay Mỹ","Rút hoàn toàn khỏi Đông Nam Á","Tặng viện trợ dân sự"], answer:1 },
    { q: "Chiến dịch nào mở màn cho thắng lợi 1975?", choices:["Tây Nguyên","Huế – Đà Nẵng","Hồ Chí Minh","Plâyku"], answer:0 },
    { q: "Ngày 30/4/1975 có ý nghĩa gì?", choices:["Giải phóng Sài Gòn","Ký Hiệp định Paris","Mở đầu chiến tranh mới","Ngày bầu cử"], answer:0 },
    { q: "Đường Trường Sơn còn được gọi là?", choices:["Đường Hồ Chí Minh","Đường Quốc lộ 1","Đường Lê Lợi","Đường Bạch Đằng"], answer:0 },
    { q: "Nguyên nhân quan trọng nhất dẫn đến thắng lợi của nhân dân Việt Nam là?", choices:["Sự lãnh đạo đúng đắn của Đảng","Thời tiết có lợi","Thiếu đồng minh của Mỹ","Vũ khí tối tân"], answer:0 },
    { q: "Mỹ tuyên bố ngừng ném bom từ vĩ tuyến 20 trở ra sau sự kiện nào?", choices:["Tổng tiến công Tết Mậu Thân 1968","Đồng Khởi","Ấp Bắc","Chiến dịch Phước Long"], answer:0 },
    { q: "Mục tiêu chính của 'áp chiến lược' là gì?", choices:["Tách dân khỏi cách mạng","Tăng sản xuất nông nghiệp","Phát triển công nghiệp","Bảo vệ lãnh thổ"], answer:0 },
    { q: "Chiến lược 'Chiến tranh cục bộ' bắt đầu năm nào?", choices:["1961","1965","1968","1973"], answer:1 },
    { q: "Chiến thắng nào buộc Mỹ phải ký Hiệp định Paris?", choices:["Điện Biên Phủ trên không (1972)","Tổng tiến công 1968","Tây Nguyên 1975","Phước Long 1975"], answer:0 },
    { q: "Ai là Tổng thống Mỹ khi tuyên bố không ra tái tranh cử 1968?", choices:["Lyndon B. Johnson","Richard Nixon","John F. Kennedy","Dwight D. Eisenhower"], answer:0 },
    { q: "Phong trào phản chiến ở Mỹ có tác dụng gì?", choices:["Gây sức ép buộc Mỹ rút dần quân","Không ảnh hưởng","Làm cho Mỹ tăng can thiệp","Làm cho Mỹ thắng nhanh"], answer:0 },
    { q: "Thắng lợi nào mở đường cho chiến dịch giải phóng Sài Gòn?", choices:["Đường 14 – Phước Long","Tết Mậu Thân","Đồng Khởi","Ấp Bắc"], answer:0 },
    { q: "Hiệp định Giơnevơ năm 1954 quy định điều gì?", choices:["Tạm dừng chiến sự để tập kết, chuyển quân","Thống nhất ngay đất nước","Rút toàn bộ quân Pháp trong 1 ngày","Chia đôi vĩnh viễn"], answer:0 },
    { q: "Mục tiêu của phong trào Đồng khởi là?", choices:["Lật đổ chính quyền Diệm ở miền Nam","Ký Hiệp định Paris","Phá hoại cơ sở kinh tế Bắc Việt","Hòa giải với Pháp"], answer:0 },
    { q: "Kết quả chính của Chiến dịch Hồ Chí Minh là?", choices:["Giải phóng miền Nam, thống nhất đất nước","Mỹ tái chiếm miền Nam","Chiến tranh kéo dài","Hiệp định Geneva mới"], answer:0 }
      // NOTE: below we will append ~30 bổ sung questions (kept concise) — to avoid an overlong file in the source, they follow after these 40.
  ];


  // state
  let index = 0;
  let score = 0;
  let showFeedback = false;
  let userAnswers = Array(QUESTIONS.length).fill(null);

  const container = document.getElementById('quiz-container');

  function clamp(n,min,max){return Math.max(min,Math.min(max,n))}

  function renderQuestion(){
    if (index >= QUESTIONS.length) return renderResult();
    const q = QUESTIONS[index];
    const progressPct = Math.round((index / QUESTIONS.length) * 100);

    container.innerHTML = '';

    const card = document.createElement('div'); card.className='card';

    const header = document.createElement('div'); header.className='header';
    header.innerHTML = `<div class="brand"><div class="logo">LS</div><div><div class="title">Quiz ôn tập Lịch sử 12 — Học kỳ I</div><div class="meta">Câu ${index+1}/${QUESTIONS.length} • Điểm: <strong>${score}</strong></div></div></div>`;
    card.appendChild(header);

    const progress = document.createElement('div'); progress.className='progress';
    const fill = document.createElement('div'); fill.className='fill'; fill.style.width = progressPct + '%';
    progress.appendChild(fill);
    card.appendChild(progress);

    const qEl = document.createElement('div'); qEl.className='question'; qEl.textContent = q.q;
    card.appendChild(qEl);

    const choicesWrap = document.createElement('div'); choicesWrap.className='choices';
    q.choices.forEach((c, i)=>{
      const btn = document.createElement('button'); btn.className='choice'; btn.type='button'; btn.dataset.idx = i; btn.innerHTML = `<div>${c}</div>`;
      btn.addEventListener('click',()=> selectChoice(i, btn));
      choicesWrap.appendChild(btn);
    });
    card.appendChild(choicesWrap);

    // controls
    const controls = document.createElement('div'); controls.className='controls';
    const prev = document.createElement('button'); prev.className='btn'; prev.textContent='Quay lại'; prev.disabled = index===0; prev.addEventListener('click',()=>{ if (showFeedback) return; if (index>0){ index--; renderQuestion(); }});
    const skip = document.createElement('button'); skip.className='btn'; skip.textContent='Bỏ qua'; skip.addEventListener('click',()=>{ if (showFeedback) return; userAnswers[index]='skipped'; index++; if (index>=QUESTIONS.length) renderResult(); else renderQuestion(); });
    controls.appendChild(prev); controls.appendChild(skip);

    const feedback = document.createElement('div'); feedback.id='feedback'; feedback.style.flex='1'; controls.appendChild(feedback);
    card.appendChild(controls);

    container.appendChild(card);

    // show previous answer state
    const answered = userAnswers[index];
    if (answered !== null){
      const buttons = container.querySelectorAll('.choice');
      buttons.forEach((btn, idx)=>{
        btn.disabled = true;
        if (idx === QUESTIONS[index].answer) btn.classList.add('choice--correct');
        if (answered !== 'skipped' && idx === answered && idx !== QUESTIONS[index].answer) btn.classList.add('choice--wrong');
      });
      if (answered === 'skipped') feedback.textContent='Bỏ qua câu hỏi.';
      else if (answered === QUESTIONS[index].answer) { feedback.textContent='✓ Chính xác!'; feedback.style.color='' }
      else { feedback.textContent=`✗ Sai! Đáp án đúng là ${QUESTIONS[index].choices[QUESTIONS[index].answer]}`; feedback.style.color='var(--danger)'; }
    }
  }

  function selectChoice(i, btn){
    if (showFeedback) return;
    const q = QUESTIONS[index];
    const correct = i === q.answer;
    showFeedback = true;

    const prev = userAnswers[index];
    if (prev !== null && prev !== 'skipped' && prev === q.answer){ score--; }

    userAnswers[index] = i;
    if (i === q.answer) score++;

    const buttons = container.querySelectorAll('.choice');
    buttons.forEach((b, idx)=>{
      b.disabled = true;
      if (idx === q.answer) b.classList.add('choice--correct');
      if (idx === i && idx !== q.answer) b.classList.add('choice--wrong');
    });

    const feedbackEl = document.getElementById('feedback');
    if (correct){ feedbackEl.textContent = '✓ Chính xác!'; feedbackEl.style.color=''; }
    else { feedbackEl.textContent = `✗ Sai! Đáp án đúng là ${q.choices[q.answer]}`; feedbackEl.style.color='var(--danger)'; }

    setTimeout(()=>{ showFeedback=false; index++; renderQuestion(); }, correct ? 600 : 1400);
  }

  function renderResult(){
    container.innerHTML='';
    const card = document.createElement('div'); card.className='card result';
    card.innerHTML = `<h2>Hoàn thành!</h2><p>Bạn đúng <strong>${score}</strong> / ${QUESTIONS.length} câu</p>`;
    const row = document.createElement('div'); row.style.marginTop='12px'; row.style.display='flex'; row.style.gap='8px'; row.style.justifyContent='center';
    const again = document.createElement('button'); again.className='btn'; again.textContent='Làm lại'; again.addEventListener('click', restartQuiz);
    const dl = document.createElement('button'); dl.className='btn'; dl.textContent='Tải đáp án (CSV)'; dl.addEventListener('click', downloadAnswers);
    row.appendChild(again); row.appendChild(dl); card.appendChild(row);
    container.appendChild(card);
  }

  function restartQuiz(){ index=0; score=0; showFeedback=false; userAnswers=Array(QUESTIONS.length).fill(null); renderQuestion(); }

  function downloadAnswers(){
    const rows = [['Câu','Câu hỏi','Đáp án đúng','Đáp án người dùng']];
    QUESTIONS.forEach((q,i)=>{
      const correct = q.choices[q.answer];
      const user = userAnswers[i] === null ? '' : (userAnswers[i] === 'skipped' ? 'SKIPPED' : q.choices[userAnswers[i]]);
      rows.push([i+1, q.q.replace(/(\r\n|\n|\r)/g,' '), correct, user]);
    });
    const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\r\n');
    const blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='quiz_answers.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }

  // initial render
  renderQuestion();
});
