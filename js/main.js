
// Kredit kartı seçimi


$(document).ready(function() {
   
       
       $(".list-item").click((e)=>{
           $("#cardChoose").html(e.target.innerHTML)
           $("#cardChoose").css("color","#000")
           $(".credits-part").slideDown(300)
           }) 
    
        
        $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).find('.dropdown-list').slideToggle(300);
            
        });
        $('.dropdown').focusout(function () {
          
            $(this).find('.dropdown-list').slideUp(300);
        });


    });
    
    

    // Kredit hesablama kalkulatoru

    let creditRange = document.querySelector("#credit-range")
let option = document.querySelectorAll(".option-item")
document.querySelectorAll(".range-step").forEach(function (ctrl) {
	var el = ctrl.querySelector('input');
	var output = ctrl.querySelector('output');

	el.oninput = function () {
		
        // rənglər
		ctrl.querySelectorAll("option").forEach(function (opt) {
			if (opt.value <= el.valueAsNumber) {
				opt.style.backgroundColor = 'white';
				opt.style.border = '1px solid #F58634'
			}
			else {
				opt.style.backgroundColor = 'white';
				opt.style.border = '1px solid #D0D0D0'
			}
		});
	
        //  əvvəl və sonrakı rənglər
		var valPercent = (el.valueAsNumber - parseInt(el.min)) / (parseInt(el.max) - parseInt(el.min));
		var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' +
			valPercent + ', #F58634), color-stop(' +
			valPercent + ', #F6F6F6));';
		el.style = style;

		option.forEach(e => {
            // e.style.cssText="color:#2D2D2D;height:18px;width:18px;position:static;line-height:90px;font-size:14px;font-weight:400;border:0.5px solid #F58634 !important;"
			e.style.color = "#2D2D2D";
			e.style.height = "18px";
			e.style.width = "18px"
			e.style.position = "static"
			e.style.lineHeight = "90px"
			e.style.fontSize = "14px"
			e.style.fontWeight = "400"
			e.style.border = "0.5px solid #F58634 !important;"
			e.innerHTML = e.value

            if(e.value >= option[creditRange.value]){
                e.style.border = "5.5px solid #F58634 !important;"

            }


		})

		option[creditRange.value - 1].style.color = "#F58634"
		option[creditRange.value - 1].style.width = "28px"
		option[creditRange.value - 1].style.height = "28px"
		option[creditRange.value - 1].style.position = "relative"
		option[creditRange.value - 1].style.bottom = "5px"
		option[creditRange.value - 1].style.lineHeight = "100px"
		option[creditRange.value - 1].style.fontSize = "16px"
		option[creditRange.value - 1].style.fontWeight = "bold"
		option[creditRange.value - 1].style.border = "1px solid #F58634 !important;"

		option[creditRange.value - 1].innerHTML = option[creditRange.value - 1].innerHTML + " " + "ay"

		if ((' ' + ctrl.className + ' ').indexOf(' ' + 'range-step-popup' + ' ') > -1) {
			var selectedOpt = ctrl.querySelector('option[value="' + el.value + '"]');
			output.innerText = selectedOpt.text;
			output.style.left = "50%";
			selectedOpt.style.backgroundColor = "red"
			selectedOpt.style.color = "red"
			output.style.left = ((selectedOpt.offsetLeft + selectedOpt.offsetWidth / 2) - output.offsetWidth / 2) + 'px';
		}
	};
	el.oninput();
});

window.onresize = function () {
	document.querySelectorAll(".range").forEach(function (ctrl) {
		var el = ctrl.querySelector('input');
		el.oninput();
	});
};


// Məhsul haqqənda məlumat

let descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo..."

$(document).ready(()=>{
   
    $("#text").html(
        `${descText.substring(0,244)}...     <span class="read-more" >ardını oxu</span>`
    )

  

    $(".read-more").click(()=>{
        $("#text").html(
            `${descText}`
        )
    })

   
   


    // Rəng eçimi mobil üçün
    $(".color-item").click((e)=>{
        $(".color-name").html(e.target.innerHTML)
      
        $(".color-dropdown-list").slideUp(300)
        }) 
 

  $(".color-dropdown").click(()=>{
      $(this).attr('tabindex', 1).focus();
      $('.color-dropdown-list').slideToggle(300);


  })
  
  $(".color-dropdown").focusout(()=>{
     $('.color-dropdown-list').slideUp(300);
});




 // Yaddaş seçimi mobil üçün

 $(".memory-item").click((e)=>{
    $(".memory-value").html(e.target.innerHTML)
  
    $(".memory-dropdown-list").slideUp(300)
    }) 


$(".memory-dropdown").click(()=>{
  $(this).attr('tabindex', 1).focus();
  $('.memory-dropdown-list').slideToggle(300);


})

$(".memory-dropdown").focusout(()=>{
 $('.memory-dropdown-list').slideUp(300);
});





// Mobil üçün xüsusiyyətlərin hamısının görülməsi

$(".show-more-tr").click(()=>{
    $(".show-more-tr").removeClass("shadow")
    $(".mobile-product-feature-table .table table tr").css("display","table-row")
    $(".mobile-product-feature-table-bottom").css("display","none")
})




   // Aşağı enəndə  "Xüsusiyyətlər" və "rəylərin" görünməsi

    $(document).scroll(()=>{
        if(window.scrollY>=701){
            $(".navbar").css("display","flex")
        }else{
            $(".navbar").css("display","none")

        }


    })


   // Mobil versiyada Aşağı enəndə  bottom-menunun  görünməsi

    $(document).scroll(()=>{
        if(window.scrollY>=860){
            $(".mobile-fixed-bottom").fadeIn(400)
        }else{
           
            $(".mobile-fixed-bottom").fadeOut(400)

        }


    })
  
    //  "Xüsusiyyətlər" və "rəylərin" altına borderin çəkilməsi

    $(document).scroll(()=>{
        if(window.scrollY>=701 && window.scrollY<=1368){
            $("#href-feature").css("border-bottom","3px solid #F58634")
            $("#href-comments").css("border-bottom","none")
        }else if(window.scrollY<=2000 && window.scrollY>=1368){
            $("#href-comments").css("border-bottom","3px solid #F58634")
            $("#href-feature").css("border-bottom","none")

        }
console.log(window.scrollY)

    })
  
})








// Sürətli sifariş bölməsi

class PhoneField {
    constructor(a, b = "+994(___)___-____", c = "_") {
        (this.handler = a),
            (this.mask = b),
            (this.placeholder = c),
            this.setLength(),
            this.setValue(),
            (this.start = this.placeHolderPosition() - 1),
            this.handler.addEventListener("focusin", () => {
                this.focused();
            }),
            this.handler.addEventListener("keydown", (d) => {
                this.input(d);
            });
    }
    focused() {
        let a = this.placeHolderPosition();
        (this.handler.selectionStart = a), (this.handler.selectionEnd = a);
    }
    input(a) {
        if ((this.isDirectionKey(a.key) || a.preventDefault(), this.isNum(a.key))) this.changeChar(a.key);
        else if (this.isDeletionKey(a.key))
            if ("Backspace" === a.key) {
                let b = this.start;
                this.changeChar(this.placeholder, -1, b);
            } else this.changeChar(this.placeholder);
    }
    setLength() {
        this.handler.maxLength = this.mask.length;
    }
    setValue() {
        this.handler.value = this.mask;
    }
    isNum(a) {
        return !isNaN(a) && parseInt(+a) == a && !isNaN(parseInt(a, 10));
    }
    isDeletionKey(a) {
        return "Delete" === a || "Backspace" === a;
    }
    isDirectionKey(a) {
        return "ArrowUp" === a || "ArrowDown" === a || "ArrowRight" === a || "ArrowLeft" === a || "Tab" === a;
    }
    isPlaceholder(a) {
        return a == this.placeholder;
    }
    placeHolderPosition() {
        return this.handler.value.indexOf(this.placeholder);
    }
    changeChar(a, b = 1, c = this.mask.length) {
        let d = this.handler.value,
            f;
        f = 0 < b ? this.handler.selectionStart : this.handler.selectionStart - 1;
        let g = "";
        if (f === c) return !1;
        if (!this.isNum(d[f]) && !this.isPlaceholder(d[f]))
            do if (((f += b), f === c)) return !1;
            while (!this.isNum(d[f]) && !this.isPlaceholder(d[f]));
        (g = this.replaceAt(d, f, a)), (this.handler.value = g), 0 < b && (f += b), (this.handler.selectionStart = f), (this.handler.selectionEnd = f);
    }
    replaceAt(a, b, c) {
        return a.substring(0, b) + c + a.substring(++b);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let a = document.getElementsByClassName("phone"),
        b = [];
    for (let c = 0; c < a.length; c++) b.push(new PhoneField(a[c], a[c].dataset.phonemask, a[c].dataset.placeholder));
});
