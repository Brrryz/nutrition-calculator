const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

class Element {
  constructor() { this.value=''; this.textContent=''; this.innerHTML=''; this.hidden=false; this.dataset={}; this.handlers={}; this.classList={add(){},remove(){},toggle(){}}; }
  addEventListener(type,fn) { this.handlers[type]=fn; }
}
const ids=['profileForm','profileError','age','height','weight','activity','goal','bmiValue','bmiCategory','idealValue','bmrValue','tdeeValue','calorieValue','calorieDescription','calorieRingValue','carbValue','proteinValue','fatValue','resultStatus','recommendations','foodSearch','foodSuggestions','searchResults','selectedFoodName','selectedFoodMeta','foodGrams','foodForm','portionLabel','foodOutput','navLinks','heroTitle','heroDescription','personalPage','foodPage','formulaNotice','closeNotice','helpButton','mobileToggle','brandHome','clearFood'];
const elements=Object.fromEntries(ids.map(id=>[id,new Element()]));
Object.assign(elements.age,{value:'22'}); Object.assign(elements.height,{value:'170'}); Object.assign(elements.weight,{value:'65'});
Object.assign(elements.activity,{value:'1.375'}); Object.assign(elements.goal,{value:'maintain'}); Object.assign(elements.foodGrams,{value:'150'});
const sexButtons=['male','female'].map(sex=>{const e=new Element();e.dataset.sex=sex;return e;});
const pageButtons=['personal','food'].map(page=>{const e=new Element();e.dataset.page=page;return e;});
const document={getElementById:id=>elements[id]||new Element(),querySelectorAll:selector=>selector==='[data-sex]'?sexButtons:selector==='[data-page]'?pageButtons:[]};
const context={document,Intl,Number,Math,console}; vm.createContext(context);
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'..','app.js'),'utf8'),context);

elements.profileForm.handlers.submit({preventDefault(){}});
assert.match(elements.bmiValue.innerHTML,/22,5/,'BMI should be calculated for 65 kg / 170 cm');
assert.match(elements.bmrValue.innerHTML,/1\.6/,'BMR output should be populated');
assert.match(elements.recommendations.innerHTML,/Pertahankan|Utamakan/,'Rule-based recommendations should render');

elements.foodForm.handlers.submit({preventDefault(){}});
assert.match(elements.foodOutput.innerHTML,/DATA DEMO/,'Food nutrition table should render');
assert.match(elements.foodOutput.innerHTML,/195,0/,'150 g rice demo energy should scale from 130 kcal per 100 g');

pageButtons[1].handlers.click();
assert.equal(elements.foodPage.hidden,false,'Food page should become visible after navigation');
assert.equal(elements.personalPage.hidden,true,'Personal page should hide after navigation');

// Guardrails: under 18 years old is not processed.
elements.age.value='16';
elements.profileForm.handlers.submit({preventDefault(){}});
assert.equal(elements.profileError.hidden,false,'Age under 18 should trigger an explicit guardrail');
assert.match(elements.profileError.textContent,/usia 18–100 tahun/);
console.log('PASS: profile formulas, BMI, BMR, recommendations, food portion scaling, navigation, and safety guardrails.');
