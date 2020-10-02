3SA04 – React Native
1.	เครื่องมือที่จำเป็น
-	Chocolatey (for Windows), Brew (for OSX)
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio
 
หลังจากที่ได้ติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)
ด้วยคำสั่ง
>> choco install nodejs
>> choco install yarn
>> choco install git

ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)

>> yarn global add expo-cli

2.ติดตั้งโปรแกรม Expo (มีทั้งบน Android และ iOS) ลงบนสมาร์ทโฟนที่ใช้ในการรันโปรแกรม

3.การติดตั้ง Navigation Library
ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง
>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native

4.การติดตั้ง react-native-router-flux
เป็น API ที่แตกต่างจาก react-navigation ช่วยให้ผู้ใช้กำหนดเส้นทางทั้งหมดในที่เดียวและนำทางและสื่อสารระหว่างหน้าจอต่างๆได้อย่างง่ายดาย
ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง
>> expo install react-native-router-flux
>> yarn add react-native-router-flux

5.ติดตั้ง lottie react native
Lottie ก็คือ library ที่เอาไว้จัดการกับ Animation ซึ่งเราสามารถใช้ได้กับทั้ง IOS, Android หรือ React Native 
เพื่อที่เราจะสามารถทำการ render animations มาอยู่ใน App ได้ (ภาพเคลื่อนไหว)
>> expo install lottie-react-native
>> yarn add lottie-react-native

6.การใช้งาน React-Native ที่มาจากการดาวน์โหลด หรือ clone จาก github
>> yarn อีกครั้งใน cmd 
>> yarn start 
