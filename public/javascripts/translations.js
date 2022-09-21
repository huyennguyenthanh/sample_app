I18n.translations || (I18n.translations = {});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), JSON.parse('{"account_activations":{"edit":{"activate_fail":"Đường dẫn kích hoạt không hợp lệ.","activate_success":"Kích hoạt tài khoản thành công!"}},"activerecord":{"attributes":{"micropost":{"content":"Nội dung","image":"Hình ảnh"},"user":{"email":"Địa chỉ email","name":"Tên","password":"Mật khẩu","password_confirmation":"Xác nhận lại mật khẩu"}},"errors":{"messages":{"record_invalid":"Có các lỗi sau: %{errors}","restrict_dependent_destroy":{"has_many":"Không thể xóa do tồn tại một số đối tượng phụ thuộc %{record}","has_one":"Không thể xóa do tồn tại đối tượng phụ thuộc %{record}"}},"models":{"micropost":{"attributes":{"image":{"too_big":"có kích thước quá lớn vượt quá 5MB","wrong_format":"có định dạng hình ảnh không hợp lệ."}}}}},"models":{"micropost":"Micropost","user":"User"}},"change":"Thay đổi","date":{"abbr_day_names":["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],"abbr_month_names":[null,"Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],"day_names":["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"],"formats":{"default":"%d-%m-%Y","long":"%d %B, %Y","short":"%d %b"},"month_names":[null,"Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng mười một","Tháng mười hai"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"khoảng 1 giờ","other":"khoảng %{count} giờ"},"about_x_months":{"one":"khoảng 1 tháng","other":"khoảng %{count} tháng"},"about_x_years":{"one":"khoảng 1 năm","other":"khoảng %{count} năm"},"almost_x_years":{"one":"gần 1 năm","other":"gần %{count} năm"},"half_a_minute":"30 giây","less_than_x_minutes":{"one":"chưa tới 1 phút","other":"chưa tới %{count} phút"},"less_than_x_seconds":{"one":"chưa tới 1 giây","other":"chưa tới %{count} giây"},"over_x_years":{"one":"hơn 1 năm","other":"hơn %{count} năm"},"x_days":{"one":"1 ngày","other":"%{count} ngày"},"x_minutes":{"one":"1 phút","other":"%{count} phút"},"x_months":{"one":"1 tháng","other":"%{count} tháng"},"x_seconds":{"one":"1 giây","other":"%{count} giây"}},"prompts":{"day":"Ngày","hour":"Giờ","minute":"Phút","month":"Tháng","second":"Giây","year":"Năm"}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"phải được đồng ý","aspect_ratio_is_not":"phải có tỉ lệ ảnh %{aspect_ratio}","aspect_ratio_not_landscape":"phải là ảnh ngang","aspect_ratio_not_portrait":"phải là ảnh đứng","aspect_ratio_not_square":"phải là ảnh hình vuông","aspect_ratio_unknown":"tỉ lệ ảnh không xác định","blank":"không thể để trắng","confirmation":"không khớp với xác nhận","content_type_invalid":"tệp không hợp lệ","dimension_height_equal_to":"chiều cao phải bằng %{length} pixel","dimension_height_greater_than_or_equal_to":"chiều cao phải lớn hơn hoặc bằng %{length} pixel","dimension_height_inclusion":"chiều cao không nằm trong %{min} và %{max} pixel","dimension_height_less_than_or_equal_to":"chiều cao phải nhỏ hơn hoặc bằng %{length} pixel","dimension_max_inclusion":"phải nhỏ hơn hoặc bằng %{width} x %{height} pixel","dimension_min_inclusion":"phải lớn hơn hoặc bằng %{width} x %{height} pixel","dimension_width_equal_to":"chiều rộng phải bằng %{length} pixel","dimension_width_greater_than_or_equal_to":"chiều rộng phải lớn hơn hoặc bằng %{length} pixel","dimension_width_inclusion":"chiều rộng không nằm trong %{min} và %{max} pixel","dimension_width_less_than_or_equal_to":"chiều rộng phải nhỏ hơn hoặc bằng %{length} pixel","empty":"không thể rỗng","equal_to":"phải bằng %{count}","even":"phải là số chẵn","exclusion":"đã được giành trước","file_size_out_of_range":"kích thước %{file_size} vượt giới hạn","greater_than":"phải lớn hơn %{count}","greater_than_or_equal_to":"phải lớn hơn hoặc bằng %{count}","image_metadata_missing":"không phải là ảnh","inclusion":"không có trong danh sách","invalid":"không hợp lệ","less_than":"phải nhỏ hơn %{count}","less_than_or_equal_to":"phải nhỏ hơn hoặc bằng %{count}","limit_out_of_range":"tổng số tệp vượt giới hạn","not_a_number":"không phải là số","not_an_integer":"phải là một số nguyên","odd":"phải là số lẻ","other_than":"cần phải khác %{count}","present":"cần phải để trắng","required":"phải có","taken":"đã có","too_long":"quá dài (tối đa %{count} ký tự)","too_short":"quá ngắn (tối thiểu %{count} ký tự)","wrong_length":"độ dài không đúng (phải là %{count} ký tự)"},"template":{"body":"Có lỗi với các mục sau:","header":{"one":"1 lỗi ngăn không cho lưu %{model} này","other":"%{count} lỗi ngăn không cho lưu %{model} này"}}},"faker":{"address":{"city":["#{city_root}"],"city_root":["Bắc Giang","Bắc Kạn","Bắc Ninh","Cao Bằng","Điện Biên","Hà Giang","Hà Nam","Hà Tây","Hải Dương","TP Hải Phòng","Hòa Bình","Hưng Yên","Lai Châu","Lào Cai","Lạng Sơn","Nam Định","Ninh Bình","Phú Thọ","Quảng Ninh","Sơn La","Thái Bình","Thái Nguyên","Tuyên Quang","Vĩnh Phúc","Yên Bái","TP Đà Nẵng","Bình Định","Đắk Lắk","Đắk Nông","Gia Lai","Hà Tĩnh","Khánh Hòa","Kon Tum","Nghệ An","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Trị","Thanh Hóa","Thừa Thiên Huế","TP TP. Hồ Chí Minh","An Giang","Bà Rịa Vũng Tàu","Bạc Liêu","Bến Tre","Bình Dương","Bình Phước","Bình Thuận","Cà Mau","TP Cần Thơ","Đồng Nai","Đồng Tháp","Hậu Giang","Kiên Giang","Lâm Đồng","Long An","Ninh Thuận","Sóc Trăng","Tây Ninh","Tiền Giang","Trà Vinh","Vĩnh Long"],"county":["Avon","Bedfordshire","Berkshire","Borders","Buckinghamshire","Cambridgeshire","Central","Cheshire","Cleveland","Clwyd","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Derbyshire","Devon","Dorset","Dumfries and Galloway","Durham","Dyfed","East Sussex","Essex","Fife","Gloucestershire","Grampian","Greater Manchester","Gwent","Gwynedd County","Hampshire","Herefordshire","Hertfordshire","Highlands and Islands","Humberside","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","Lothian","Merseyside","Mid Glamorgan","Norfolk","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Oxfordshire","Powys","Rutland","Shropshire","Somerset","South Glamorgan","South Yorkshire","Staffordshire","Strathclyde","Suffolk","Surrey","Tayside","Tyne and Wear","Việt Nam","Warwickshire","West Glamorgan","West Midlands","West Sussex","West Yorkshire","Wiltshire","Worcestershire"],"default_country":["Việt Nam"],"postcode":"/[A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}/"},"cell_phone":{"formats":["012# ### ####","0162 ### ####","0163 ### ####","0164 ### ####","0165 ### ####","0166 ### ####","0167 ### ####","0168 ### ####","0169 ### ####","0186 ### ####","0188 ### ####","0199 ### ####","0866 ### ###","0868 ### ###","0869 ### ###","088# ### ###","09## ### ###"]},"company":{"name":["#{prefix} #{Name.last_name}"],"prefix":["Công ty","Cty TNHH","Cty","Cửa hàng","Trung tâm","Chi nhánh"]},"internet":{"domain_suffix":["com","net","info","vn","com.vn"]},"lorem":{"words":["đã","đang","ừ","ờ","á","không","biết","gì","hết","đâu","nha","thế","thì","là","đánh","đá","đập","phá","viết","vẽ","tô","thuê","mướn","mượn","mua","một","hai","ba","bốn","năm","sáu","bảy","tám","chín","mười","thôi","việc","nghỉ","làm","nhà","cửa","xe","đạp","ác","độc","khoảng","khoan","thuyền","tàu","bè","lầu","xanh","đỏ","tím","vàng","kim","chỉ","khâu","may","vá","em","anh","yêu","thương","thích","con","cái","bàn","ghế","tủ","quần","áo","nón","dép","giày","lỗi","được","ghét","giết","chết","hết","tôi","bạn","tui","trời","trăng","mây","gió","máy","hàng","hóa","leo","núi","bơi","biển","chìm","xuồng","nước","ngọt","ruộng","đồng","quê","hương"]},"name":{"first_name":["Phạm","Nguyễn","Trần","Lê","Lý","Hoàng","Phan","Vũ","Tăng","Đặng","Bùi","Đỗ","Hồ","Ngô","Dương","Đào","Đoàn","Vương","Trịnh","Đinh","Lâm","Phùng","Mai","Tô","Trương","Hà"],"last_name":["Nam","Trung","Thanh","Thị","Văn","Dương","Tăng","Quốc","Như","Phạm","Nguyễn","Trần","Lê","Lý","Hoàng","Phan","Vũ","Tăng","Đặng","Bùi","Đỗ","Hồ","Ngô","Dương","Đào","Đoàn","Vương","Trịnh","Đinh","Lâm","Phùng","Mai","Tô","Trương","Hà","Vinh","Nhung","Hòa","Tiến","Tâm","Bửu","Loan","Hiền","Hải","Vân","Kha","Minh","Nhân","Triệu","Tuân","Hữu","Đức","Phú","Khoa","Thắng","Sơn","Dung","Tú","Trinh","Thảo","Sa","Kim","Long","Thi","Cường","Ngọc","Sinh","Khang","Phong","Thắm","Thu","Thủy","Nhàn"],"name":["#{first_name} #{last_name}","#{first_name} #{last_name} #{last_name}","#{first_name} #{last_name} #{last_name} #{last_name}"],"name_with_middle":["#{first_name} #{last_name} #{last_name}"]},"phone_number":{"formats":["01#### #####","01### ######","01#1 ### ####","011# ### ####","02# #### ####","03## ### ####","055 #### ####","056 #### ####","0800 ### ####","08## ### ####","09## ### ####","016977 ####","01### #####","0500 ######","0800 ######"]}},"helper":{"base_title":"Ruby on Rails Tutorial Sample App"},"helpers":{"select":{"prompt":"Vui lòng chọn"},"submit":{"create":"Tạo %{model}","submit":"Lưu %{model}","update":"Cập nhật %{model}"}},"i18n":{"plural":{"keys":["other"]},"transliterate":{"rule":{"À":"A","Á":"A","Â":"A","Ã":"A","È":"E","É":"E","Ê":"E","Ì":"I","Í":"I","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ù":"U","Ú":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","è":"e","é":"e","ê":"e","ì":"i","í":"i","ò":"o","ó":"o","ô":"o","õ":"o","ù":"u","ú":"u","ý":"y","Ă":"A","ă":"a","Đ":"D","đ":"d","Ĩ":"I","ĩ":"i","Ũ":"U","ũ":"u","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}}},"layouts":{"footer":{"about":"Về chúng tôi","contact":"Liên hệ","news":"Tin tức"},"header":{"account":"Tài khoản","help":"Trợ giúp","home":"Trang chủ","login":"Đăng nhập","logout":"Đăng xuất","profile":"Hồ sơ cá nhân","settings":"Cài đặt","user":"Người dùng"}},"microposts":{"create":{"success":"Tạo bài đăng thành công"},"destroy":{"delete":"Bài đăng đã bị xóa"},"micropost":{"ago":"trước","confirm":"Bạn có chắc muốn xóa bài viết này?","delete":"Xóa","posted":"Đã đăng"}},"number":{"currency":{"format":{"delimiter":".","format":"%n %u","precision":0,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"VNĐ"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Tỷ","million":"Triệu","quadrillion":"Triệu tỷ","thousand":"Nghìn","trillion":"Nghìn tỷ","unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Byte"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password_resets":{"create":{"email_not_found":"Không tìm thấy địa chỉ email","email_sent":"Email đã được gửi cùng hướng dẫn đổi mật khẩu"},"edit":{"password":"Mật khẩu","password_confirm":"Xác nhận lại mật khẩu","submit_button":"Cập nhật mật khẩu"},"new":{"submit_button":"Gửi email","title":"Quên mật khẩu"},"update":{"expired":"Đường dẫn quá hạn.","success":"Cập nhật mật khẩu thành công."}},"relationships":{"find_user_for_create":{"not_found":"Không tìm thấy người dùng"},"find_user_for_destroy":{"not_found":"Không tìm thấy người dùng"}},"save":"Lưu thay đổi","sessions":{"create":{"account_not_activated":"Tài khoản chưa được kích hoạt","login_fail":"Email hoặc mật khẩu không hợp lệ.","login_success":"Đăng nhập thành công."},"new":{"email":"Địa chỉ email","forgot_password":"Quên mật khẩu?","mess":"Người dùng mới?","password":"Mật khẩu","remember_me":"Ghi nhớ tôi trên ứng dụng này."}},"shared":{"error_messages":{"error":"lỗi","error_mess":"Biểu mẫu bao gồm"},"micropost_form":{"large_image_error":"Dung lượng file lơn nhất là 5MB. VUi lòng chọn file nhỏ hơn.","new_post":"Thử viết bài đăng mới...","post_button":"Đăng"},"stats":{"followers":"người theo dõi","following":"đang theo dõi"},"user_info":{"view_my_profile":"Xem hồ sơ cá nhân"}},"static_pages":{"about":{"about":"Về chúng tôi","and":"và","book":"sách","family":"bộ hướng dẫn, là một","part":"là một phần của","sample_app":" Đây là sản phẩm ví dụ cho bộ hướng dẫn này.","the":"","to_teach":"nhằm hướng dẫn phát triển ứng dụng web"},"contact":{"contact":"Liên hệ","s1":"Liên hệ Ruby on Rails Tutorial về ứng dụng ví dụ tại đường link"},"help":{"help":"Giúp đỡ","s1":"Tìm kiếm giúp đỡ Ruby on Rails Tutorial tại đường link","s2":"Tìm kiếm sách hướng dẫn tại"},"home":{"microposts_feed":"Bảng tin bài đăng","s1":"Đây là trang chủ","s2":"cho ứng dụng ví dụ.","signupnow":"Đăng ký ngay!","welcome_quote":"Chào mừng tới ứng dụng ví dụ!"}},"support":{"array":{"last_word_connector":", và ","two_words_connector":" và ","words_connector":", "}},"time":{"am":"sáng","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%d %B, %Y %H:%M","short":"%d %b %H:%M"},"pm":"chiều"},"title":{"about":"Về chúng tôi","contact":"Liên hệ","edit":"Chỉnh sửa","help":"Trợ giúp","home":"Trang chủ","login":"Đăng nhập","signup":"Đăng ký"},"user_mailer":{"account_activation":{"account_activation":"Kích hoạt tài khoản","submit":"Gửi"},"password_reset":{"click":"Để đặt lại mật khẩu, hãy nhấn vào link bên dưới","link":"Đặt lại mật khẩu","pass_reset_content":"Liên kết này sẽ hết hạn trong hai giờ. Nếu bạn không yêu cầu mật khẩu của mình được đặt lại, vui lòng bỏ qua email này và mật khẩu của bạn sẽ không bị thay đổi","password_reset":"Đặt lại mật khẩu"}},"users":{"create":{"mail_validate_send":"Vui lòng kiểm tra email để kích hoạt tài khoản.","signup_fail":"Có lỗi xảy ra. Vui lòng thử lại.","signup_success":"Đăng ký tài khoản thành công!"},"destroy":{"destroy_fail":"Xóa người dùng lỗi.","destroy_success":"Người dùng đã bị xóa."},"follow":{"follow":"Theo dõi"},"follow_form":{"follow":"Theo dõi","unfollow":"Hủy theo dõi"},"followers":{"title":"Được theo dõi"},"following":{"title":"Đang theo dõi"},"index":{"title":"Danh sách người dùng"},"load_user":{"not_found_user":"Không tìm thấy người dùng."},"login_require_mess":"Vui lòng đăng nhập trước.","new":{"signup_button":"Tạo tài khoản mới","signup_quote":"Đây là trang đăng ký cho ngươi dùng mới.","title":"Trang Đăng ký"},"show_follow":{"micropost":"Bài đăng","view_my_profile":"Xem bài đăng của tôi"},"unfollow":{"unfollow":"Bỏ theo dõi"},"update":{"update_fail":"Đã có lỗi xảy ra. Vui lòng thử lại.","update_success":"Cập nhật thành công."},"update_correct_user_mess":"Bạn không có quyền chỉnh sửa người dùng này.","user":{"comfirm":"Bạn có chắc muốn xóa người dùng này?","delete":"Xóa"}}}'));