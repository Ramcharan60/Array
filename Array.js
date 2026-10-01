 //-----------Currying & Uncurrying------------------

function fun1(a){
    return function (b){
      return  function (c){
          console.log(a+b+c);
          
         }
    }
}fun1(10)(20)(30)


  function emp(name){
    return function (dept){
      return  function (sal){
          console.log(name);
          console.log(dept);
          console.log(sal);
          
         }
    }
}emp("Ramcharan")("CSE")(37000)


function mul1(a){
    return function (b){
      return  function (c){
          console.log(a*b*c);
          
         }
    }
}mul1(1)(2)(3)



function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }

}
function uncurried(a,b,c){
    return a+b+c;
}
console.log(uncurried(1,2,3));


function curried(a){
    return function(b){
        return function(c){
            return function(d){
            return a+b+c+d;
            }
        }
    }
}
console.log(curried(1)(2)(3)(4));
function uncurried1(a,b,c,d){
         return a+b+c+d;
            }
console.log(uncurried1(1,2,3,4));





//--------------Spread Operator----------------

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,11];
let tot=[...arr1 , ...arr2];
console.log(tot);

let arr3=["Ramcharan"];
let arr4=["Sai Teja"];
let tot1=[...arr3,...arr4];
console.log(tot1);

let arr5=[5,4,9,7,1];
let tot2=[...arr5,47,48,58];
console.log(tot2);

let obj1={
    name:"Ramcharan",
    Role:"Frotend Developer"
}
let obj2={
    name1:"sai Teja",
    Role1:"Java Developer"
}
let tot3={...obj1,...obj2};
console.log(tot3);

let obj3={
    name2:"Jathin",
    company:"stackly",
    id:4524 
}
let tot4={...obj3,salary:50000};
console.log(tot4);


let obj5={
    name:"Ramcharan",
    Age:55,
    city:"Tadepalligudem"
}
let obj6={
    pincode:53497,
    state:"AndhraPradesh"
}
let tot5={...obj5,...obj6};
console.log(tot5);

let arr6=[15,16,17,18,19];
let arr7=[20,21,22,23,24];
let tot6=[...arr6,...arr7];
let reverse=tot6.reverse();
console.log(reverse);



//--------------------- Rest Operator in Functions ------------------

function value(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(...rest); 
 }
 value(12,4,32,2,6)

 
function student(name, department, ...marks){
     console.log(name);
    console.log(department);
    console.log(...marks); 
}
student("Ramcharan","frontend developer",25)


function values(a,b,...add){
     console.log("First number:", a);
    console.log("Second number:", b);
    console.log("Additional numbers:", add);
}
values(10, 20, 30, 40, 50)


function num(...rest){
    console.log(rest[4]);
    
}
num(10, 20, 30, 40, 50,3)


function products(prpduct,price,...rest){
    console.log(prpduct);
    console.log(price);
    console.log("Additional info:" ,rest);
}
products("Bike",250000,"Duke","12-3-2027")


function numbers(a, b, ...rest) {
    console.log("First val:", a);
    console.log("Second val:", b);
    console.log("Remaining vals:", rest);
}

numbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

//-----------------Array Destructuring --------------
let arr8=[5,6,7,8];
let[a1,a2,a3,a4]=arr8;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

let arr9=["Ramcharan",25,"Frotend Developer","Tadepalligudem"];
let[Name,age,Role,City]=arr9;
console.log(Name);
console.log(age);
console.log(Role);

let arr10=[1,2,3,4,5];
let[b1,b2,b3,b4,b5]=arr10;
console.log(b1);;
console.log(b4);

let arr11=[1,2,[5,3,45,[10,11]]];
let[c1,c2,[c3,c4,c5,[c6,c7]]]=arr11;
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.log(c5);
console.log(c6);
console.log(c7);

let arr12=[22,25,54,[45,15,[25,14,[55]]]];
let[d1,d2,d3,[d4,d5,[d6,d7,[d8]]]]=arr12;
console.log(d7);
console.log(d4);
console.log(d5);
console.log(d2);




//-----------Object Destructuring ----------------

let obj7={
    name:"Ramcharan",
    Designation:"Frotend Developer",
    salary:25000
}
let{name,Designation,salary}=obj7
console.log(name);
console.log(Designation);
console.log(salary);


let obj8={
    name3ame:"Sailu",
    Department:"CSE",
    Cgpa:8.5
}
let{name3,Department,Cgpa}=obj8;
console.log(name3);
console.log(Department);
console.log(Cgpa);


let obj9={
    brand: "Audi",
    model: "Q7",
    color: "White",
    price:"2.3cr",
    Engine:"solar"
}
let{brand,model,color,price,Engine}=obj9;
console.log(model);
console.log(Engine);
console.log(brand);


let obj10={
    Name1:"Nitish Kumar",
    designation:"Python Developer",
    Id:2654-32,
    Team:{
       mem1:{
        name4:"Gokul",
        salary:50010
       },
       mem2:{
          name5:"Abdul",
          salary:45000
       }
    }   
}
let{Name1,Team:{
    mem1:{name4},
    mem2:{name5}
}}=obj10;
console.log(Name1);
console.log(name4);
console.log(name5);


let obj11={
    company:{
        Department1:{
            Employee:{
                Name2:"Sara Ali"
            }
        }
    }
}
let{company:{Department1:{Employee:{Name2}}}}=obj11;
console.log(Name2);



//-----------------Array Manipulation-------------------

let x1=["apple","mango","pineapple","guava","papaya"];
x1.push("orange","avagado","banana");
console.log(x1);

let x2=[5,4,8,9,12];
x2.pop();
console.log(x2);

let x3=["Ram","seetha","laxman","hanuman","Ravana"];
x3.shift();
console.log(x3);

let x4=[10,15,14,21];
x4.unshift(51,52);
console.log(x4);

let x5=[10,20,30,40,50];
x5.splice(2,1,100);
console.log(x5);

let x6=[1,2,3,4,5,6];
x6.splice(2,2);
console.log(x6);

let x7=[1,2,3,4,5,6];
x7.splice(2,0,56,85);
console.log(x7);

let x8=[1,2,3,4,5,6];
x8.splice(2,2,20,30,40);
console.log(x8);

let x9=["Ram","seetha","hanuman","Ravana","laxman"];
x9.splice(2,1);
console.log(x9);

let scart=["shirts","Tshirts","pants","Tracks"];
scart.push("shorts")
console.log(scart);

scart.pop();
console.log(scart);

scart.shift();
console.log(scart);

scart.unshift("Ton Jeans");
console.log(scart);


//--------------------Array Merge & Extraction Method---------------

let y1=[2,3,4,5,6];
let y2=[10,11,12,13,14];
let merge=y1.concat(y2);
console.log(merge);

let y3=[2,3,4,5,6];
let y4=[10,11,12,13,14];
let y5=[22,23,25,48,46];
let merge1=y1.concat(y2,y5);
console.log(merge1);

let y6=[1,2,3,4,5,6,7,8];
let y7=y6.slice(2,6);
console.log(y7);

let Sname=["bhagavan","kesari","Anil","Ravipudi","Pandu","Prabhu"];
let Sname1=Sname.slice(0,3);
console.log(Sname1);

let y8=[1,2,[3,4,5,[6,7,[8,9]]]];
let y9=y8.flat(Infinity);
console.log(y9);

let y10=[1,2,[3,4,5,[6,7,[8,9,[10,11]]]]];
let y11=y10.flat(4);
console.log(y11);


let y12=[1,2,3,4,5,6,7,8,9];
console.log("Before slice:" , y12);
let res1=y12.slice(0,5);
console.log("slice: " , res1);

let res2=y12.splice(2,3);
console.log("splice:" , res2);
console.log("After Splice :",y12);


//-----------------------Search & Other Array Methods ------------------

let arr=[12,25,17,50,89,12];
let res=arr.includes(50);
console.log(res);

let array=[1,2,3,4,5,1,2,3,4,1,2,3];
let res3=array.indexOf(2,3);
console.log(res3);


let array1=[1,2,3,4,5,1,2,3,4,1,2,3];
let res4=array1.lastIndexOf(2,5);
console.log(res4);

let array2=[12,2,4,36,25,17];
let res5=array2.sort();
console.log(res5);

let array3=[1,2,3,4,5,6,7,8,9];
let res6=array3.reverse();
console.log(res6);





