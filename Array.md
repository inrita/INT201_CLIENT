##Array Iterator Methods
- forEach() : วนลูปหาค่าที่ต้องการ (ไม่ return สร้างตัวแปรรับค่าเอง)
- filter() : คัดกรองเงื่อนไขที่ถูกต้องเท่านั้น (return new array ที่ผ่านเงื่อนไข)
- map() : คืนทุก element บนเงื่อนไขที่กำหนด (return new array ที่ผ่านเงื่อนไข)
- find() : หา element แรกที่เจอ (return value first element)
- findIndex() : หา index แรกที่เจอ (return index first element)
- every() : ทุก element เป็นจริงทั้งหมดถึงจะ (return boolean)
- some() : อย่างน้อย 1 element เป็นจริงถึงจะ (return boolean)
- reduce() : การยุบค่าให้เหลือค่าสุดท้าย (return ค่าสะสมสุดท้าย)
---

##Stack and Queue Methods
- push() : เพิ่มท้าย array (return new length)
- pop() : ลบท้าย array (return new length)
- unshift() : เพิ่มต้น array (return new length)
- shift() : ลบต้น array (return new length)
---

##Subarray Methods
- splice(start, delete, add) : ส่วนใหญ่ใช้ในการ remove (return ตัวที่ลบออกไป)
- slice(start index, end not include index) : หั่นสับเอาช่วงที่ต้องการ (return new array ในช่วงที่ระบุ)
- fill(value,start,end) : เซตค่า element ใหม่ในตำแหน่งที่ระบุ (return modified array)
---

##Searching and Sorting Methods
- includes() : ดูว่ามีค่าใน array มั้ย (return boolean)
- reverse() : สลับตำแหน่งทำกับ original array (return new array)
- sort() : เรียงลำดับตาม assci (return new array)
- concat() : การต่อ array / merge >= 2 array ขึ้นไปมารวมกัน (return new array)
- indexOf(searchElement, fromUndez) : คล้าย findIndex ไม่มี -1 (return index first element)
---

##Array to String Conversion
- join() : แปลง array เป็น "String" (return result string)
---

##Method ที่ใช้ arrow =>
**forEach, filter, map, find, findIndex, reduce**
---

###รายละเอียดเพิ่มเติม
push() : **returns the new length (add)**
find() : **findAuthor(_firstname, lastname_)**
slice(1) : returns array of all authors except the first author **(ไม่เอาคนแรก)**
splice() : returns a remove

return this.authors[0] ?? undefined : **returns the first**
return this.bookMarks[this.bookMarks.length-1] ?? undefined : **returns the last**
