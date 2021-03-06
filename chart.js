const questions = [
  {
    dataset: [
      ["ლეიბორისტული პარტია", 215480],
      ["ქართული ოცნება", 31391],
      ["მრეწველობა გადაარჩენს საქართველოს", 128869],
    ],
    text: [
      "რომელ პარტიას ჰქონდა <span>მივლინებებთან</span> დაკავშირებული ყველაზე დიდი ხარჯი 2017 წელს?",
      "მართალი ხარ! 2017 წელს საქართველოს ლეიბორისტული პარტია, 215 480 ლარის ოდენობის მივლინებების ხარჯით, პირველ ადგილზე გავიდა. მათი ხარჯები ყველა პარტიის ერთად აღებული ხარჯის მეოთხედზე მეტს შეადგენდა. მათ მოსდევთ პარტია “მრეწველობა გადაარჩენს საქართველოს”, რომელმაც 2017 წელს მივლინებებზე 128 869 ლარი დახარჯა. ქართული ოცნება - დემოკრატიული საქართველოს ანალოგიური ხარჯები 31 391 ლარს შეადგენდა.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ცდები! 2017 წელს საქართველოს ლეიბორისტული პარტია, 215 480 ლარის ოდენობის მივლინებების ხარჯით, პირველ ადგილზე გავიდა. მათი ხარჯები ყველა პარტიის ერთად აღებული ხარჯის მეოთხედზე მეტს შეადგენდა. მათ მოსდევთ პარტია “მრეწველობა გადაარჩენს საქართველოს”, რომელმაც 2017 წელს 128 869 ლარი დახარჯა. ქართული ოცნება - დემოკრატიული საქართველოს ანალოგიური ხარჯები 31 391 ლარს შეადგენდა.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს<a/>",
      "პარტიის ხარჯები",
    ],
  },
  {
    dataset: [
      ["ნაციონალური მოძრაობა", 1840720],
      ["ევროპული საქართველო", 1516104],
      ["პატრიოტთა ალიანსი", 1959750],
    ],
    text: [
      "ჩამოთვლილი პარტიებიდან რომელმა მიიღო ყველაზე დიდი ოდენობით <span>დაფინანსება</span><br> სახელმწიფო <span>ბიუჯეტიდან</span> 2020 წელს?",
      "სწორად გამოიცანი! 2020 წლის სახელმწიფო ბიუჯეტიდან საქართველოს პატრიოტთა ალიანსმა 1 959 749.72 ლარი მიიღო. პარტიას სახელმწიფო დაფინანსებით მხოლოდ ქართულმა ოცნებამ გაუსწრო, რომელმაც 4 222 545 ლარი მიიღო ბიუჯეტიდან. ერთიანმა ნაციონალურმა მოძრაობამ  - 1 840 720 ლარის, ხოლო პარტიამ “ევროპული საქართველო - მოძრაობა თავისუფლებისთვის”  1 516 104 ლარის ოდენობის დაფინანსება მიიღო.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ვერ გამოიცანი! 2020 წლის სახელმწიფო ბიუჯეტიდან საქართველოს პატრიოტთა ალიანსმა 1 959 749.72 ლარი მიიღო. პარტიას სახელმწიფო დაფინანსებით მხოლოდ ქართულმა ოცნებამ გაუსწრო, რომელმაც 4 222 545 ლარი მიიღო ბიუჯეტიდან. ერთიანმა ნაციონალურმა მოძრაობამ - 1 840 720 ლარის, ხოლო პარტიამ “ევროპული საქართველო - მოძრაობა თავისუფლებისთვის”  1 516 104 ლარის ოდენობის დაფინანსება მიიღო.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ბიუჯეტი",
    ],
  },
  {
    dataset: [
      ["ერთიანი ნაციონალური მოძრაობა", 5906315],
      ["ლელო საქართველოსთვის", 8495594],
      ["ევროპული საქართველო", 3819383],
    ],
    text: [
      "2019 და 2020 წლებში, ქვემოთ ჩამოთვლილთაგან რომელმა პარტიამ<br>მიიღო ჯამში დანარჩენ ორზე მეტი <span>შემოწირულობა?</span>",
      "კი, ბატონო, ეგრეა! ამ სამ პარტიას შორის ყველაზე მეტი შემოწირულობა 2019-2020 წლებში ლელომ მიიღო - ჯამში 8 495 594 ლარი. ამ ორი წლის განმავლობაში ერთიანმა ნაციონალურმა მოძრაობამ შემოწირულობით - 5 906 315 ლარი, ხოლო პარტიამ “ევროპული საქართველო - მოძრაობა თავისუფლებისთვის” 3 819 383 ლარი მიიღო. ორივე წელს შემოწირულობების რაოდენობით ლიდერობდა ქართული ოცნება, ჯამში 30 917 706 ლარით.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "არამც და არამც! ამ სამ პარტიას შორის ყველაზე მეტი შემოწირულობა 2019-2020 წლებში ლელომ მიიღო - ჯამში 8 495 594 ლარი. ამ ორი წლის განმავლობაში ერთიანმა ნაციონალურმა მოძრაობამ შემოწირულობით - 5 906 315 ლარი, ხოლო პარტიამ “ევროპული საქართველო - მოძრაობა თავისუფლებისთვის” 3 819 383 ლარი მიიღო. ორივე წელს შემოწირულობების რაოდენობით ლიდერობდა ქართული ოცნება, ჯამში 30 917 706 ლარით.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "შემომწირველები",
    ],
  },
  {
    dataset: [
      ["100 000 ლარი", 100000],
      ["9 500 ლარი", 9500],
      ["20 ლარი", 20],
    ],
    text: [
      "რა ოდენობის შემოსავალი მიიღო ქართულმა ოცნებამ 2019 წელს <span>საწევრო შენატანის</span> სახით?",
      "სწორია! ქართული ოცნების საწევრო შენატანის ჯამი 2019 წელს 20 ლარს შეადგენდა. მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "არასწორია! ქართული ოცნების საწევრო შენატანის ჯამი 2019 წელს 20 ლარს შეადგენდა. მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "პარტიის წევრები",
    ],
  },
  {
    dataset: [
      ["21 მილიონით მეტი", 21000000],
      ["1 მილიონით მეტი", 1000000],
      ["10 მილიონით მეტი", 10000000],
    ],
    text: [
      "რამდენი ლარით მეტი დახარჯა ქართულმა ოცნებამ 2020-ში, საქართველოს <span>საპარლამენტო არჩევნების წელს</span>,<br> წინა წელთან შედარებით, როდესაც არჩევნები არ ჩატარებულა?",
      "სწორად გამოიცანი! ქართულმა ოცნებამ საქართველოს საპარლამენტო არჩევნების წელს 2020-ში 21 მილიონი ლარით მეტი დახარჯა, ვიდრე წინა წელს, როცა არჩევნები არ ჩატარებულა. მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ვერ გამოიცანი! ქართულმა ოცნებამ საქართველოს საპარლამენტო არჩევნების წელს 2020-ში 21 მილიონი ლარით მეტი დახარჯა, ვიდრე წინა წელს, როცა არჩევნები არ ჩატარებულა. მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ოცნების ხარჯები",
    ],
    dataset: [
      ["ქართული ოცნების შემოსავალი", 29104085],
      ["დანარჩენი ხუთის შემოსავლების ჯამი", 28310788],
    ],
    text: [
      "რომელი უფრო მეტია - 2020 წელს ქართული ოცნების შემოსავალი, თუ იმავე წელს, ქართული ოცნების გარდა,<br> <span>5 ყველაზე შემოსავლიანი</span> პარტიის შემოსავლების ჯამი?",
      "სწორად გამოიცანი! ქართული ოცნების შემოსავალი 2020 წელს 29 104 085 ლარს შეადგენდა. მის გარდა 5-მა ყველაზე შემოსავლიანმა პარტიამ ერთად 28 310 788 ლარი მიიღო. ესენია ლელო საქართველოსთვის (7 995 487), ერთიანი ნაციონალური მოძრაობა (7 392 132), ევროპული საქართველო - მოძრაობა თავისუფლებისთვის (5 414 043), საქართველოს პატრიოტთა ალიანსი (4 177 885), გიორგი ვაშაძე - სტრატეგია აღმაშენებელი (3 406 992).<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ვერ გამოიცანი! ქართული ოცნების შემოსავალი 2020 წელს 29 104 085 ლარს შეადგენდა. მის გარდა 5-მა ყველაზე შემოსავლიანმა პარტიამ ერთად 28 310 788 ლარი მიიღო. ესენია ლელო საქართველოსთვის (7 995 487), ერთიანი ნაციონალური მოძრაობა (7 392 132), ევროპული საქართველო - მოძრაობა თავისუფლებისთვის (5 414 043), საქართველოს პატრიოტთა ალიანსი (4 177 885), გიორგი ვაშაძე - სტრატეგია აღმაშენებელი (3 406 992).<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "შემოსავალი",
    ],
  },
  {
    dataset: [
      ["ალეკო ელისაშვილი - მოქალაქეები", 125421],
      ["ლელო - მამუკა ხაზარაძე", 1998871],
      ["საქართველოს პატრიოტთა ალიანსი", 1044471],
    ],
    text: [
      "რომელ პარტიას აქვს ყველაზე დიდი “მარგი ქმედების კოეფიციენტი” პარლამენტში,<br> ანუ <span>მანდატების რაოდენობის შეფარდება პარტიის წლიურ ხარჯთან</span> (ბოლო არჩევნების წელს)?",
      "ყოჩაღ შენ და ალეკოს! მისმა პარტიამ 250 843-ლარიანი ხარჯით 2020 წლის არჩევნებში პარლამენტში 2 მანდატი მიიღო. ჩვენ მიერ გამოთვლილი მისი “მარგი ქმედების კოეფიციენტი” უდრის 125 421.5-ს მაშინ, როცა “ლელოსი” - 1 998 871.75-ს, ხოლო “პატრიოტთა ალიანსის” - 1 044 471.25-ს შეადგენს.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "ახია შენზე! ვერ გამოიცანი! პარტიამ „ალეკო ელისაშვილი-მოქალაქეები“ ბევრ სხვას აჯობა და 250 843-ლარიანი ხარჯით 2020 წლის არჩევნებში პარლამენტში 2 მანდატი მიიღო. ჩვენ მიერ გამოთვლილი მისი “მარგი ქმედების კოეფიციენტი” უდრის 125 421.5-ს მაშინ, როცა “ლელოსი” - 1 998 871.75-ს, ხოლო “პატრიოტთა ალიანსის” - 1 044 471.25-ს შეადგენს.<br> მეტი ინფორმაციისთვის მიყევი ამ <a href='https://askgov.ge/en/request/partiebis_shemosavlebis_statisti#incoming-73' target=_blank>ბმულს</a>",
      "მარგი ქმედების კოეფიციენტი",
    ],
  },
];

const winText = `ყოჩაღ, შენ მეტი გცოდნია, ვიდრე ამ ქვიზის შემქმნელებს <a href='https://askgov.ge/' target=_blank>Askgov.ge</a>-ს საიტის დათვალიერებამდე! ეწვიე პლატფორმას და გაიგე მეტი საინტერესო საჯარო ინფორმაცია ამ და სხვა თემებზე.`;

const loseText = `გაგაკვირვა პასუხებმა? ეწვიე <a href='https://askgov.ge/' target=_blank>Askgov.ge</a>-ს და გაიგე მეტი საინტერესო საჯარო ინფორმაცია ამ და სხვა თემებზე.`;

const initialText = `რა იცი საქართველოში პოლიტიკური პარტიების დაფინანსების შესახებ?<br>რამდენად ემთხვევა შენი ვარაუდები რეალობას?<br>გამოცადე თავი ჩვენს მოკლე ქვიზში და გაიგე მეტი ამ საკითხზე. <br><br> <em>პასუხის ასარჩევად დააკლიკეთ შესაბამის წრეზე</em>`;

let currentQuestion = 0;
let correctAnswers = 0;

d3.select("#nextButton")
  .style("position", "absolute")
  .style("bottom", "30px")
  .style("left", "390px");

window.setTimeout(() => {
  d3.select(".shareBtn").style("position", "absolute").style("left", "3000px");
}, 500);

async function chart(question) {
  d3.select("#question").html(question.text[0]);

  let biggest = [0, 0];
  question.dataset.forEach((item, index) => {
    if (item[1] > biggest[0]) {
      biggest = [item[1], index];
    }
  });

  if (currentQuestion == 3) {
    biggest = [question.dataset[2], 2];
  }

  if (currentQuestion == 5) {
    console.log("HIT");
    biggest = [question.dataset[0], 0];
  }

  const totalMoney = question.dataset.reduce(
    (prevValue, nextValue) => prevValue + nextValue[1],
    0
  );

  const probabilities = question.dataset.map((item) => item[1] / totalMoney);

  const stackedProbabilities = probabilities.map((item, i) => {
    if (i == 0) {
      return item;
    } else if (i == probabilities.length - 1) {
      return 1;
    } else {
      const stacked = probabilities.reduce(
        (prevItem, nextItem, index, array) => {
          if (index <= i) {
            return prevItem + nextItem;
          } else {
            return prevItem + 0;
          }
        },
        0
      );
      return stacked;
    }
  });

  const firstLabelText = questions[currentQuestion].text[3];

  const endingIds = d3.range(question.dataset.length);

  const color = "#43aa8b";

  const width = 1300;
  let dimensions = {
    width: width,
    height: 500,
    margin: {
      top: 0,
      right: 390,
      bottom: 10,
      left: 180,
    },
    pathHeight: 50,
    endsBarWidth: 15,
    endingBarPadding: 3,
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  let startYPosition = dimensions.boundedHeight / 2;

  // money generator function

  let currentMoneyId = 0;
  function generateMoney(elapsed) {
    currentMoneyId++;

    let endingPlace = d3.bisect(stackedProbabilities, Math.random());

    return {
      id: currentMoneyId,
      endingPlace: endingPlace,
      startTime: elapsed + getRandomNumberInRange(-0.1, 0.1),
      yJitter: getRandomNumberInRange(-15, 15),
    };
  }

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, dimensions.boundedWidth])
    .clamp(true);

  const arrayCopy = question.dataset.slice();
  const sorted = arrayCopy.sort(
    (prevItem, nextItem) => prevItem[1] > nextItem[1]
  );

  console.log(sorted);

  const endingBarScale = d3
    .scaleLinear()
    .domain([0, biggest[0]])
    .range([0, 200]);

  const endYScale = d3
    .scaleLinear()
    .domain([endingIds.length, -1])
    .range([0, dimensions.boundedHeight]);

  const yTransitionProgressScale = d3
    .scaleLinear()
    .domain([0.45, 0.55])
    .range([0, 1])
    .clamp(true);

  const linkLineGenerator = d3
    .line()
    .x((d, i) => i * (dimensions.boundedWidth / 5))
    .y(function (d, i) {
      if (i <= 2) {
        return startYPosition;
      } else {
        return endYScale(d);
      }
    })
    .curve(d3.curveMonotoneX);

  const linkOptions = d3.merge(
    endingIds.map((endId) =>
      new Array(6).fill([endId, endId, endId, endId, endId, endId])
    )
  );

  const linksGroup = bounds.append("g");
  const links = linksGroup
    .selectAll(".category-path")
    .data(linkOptions)
    .enter()
    .append("path")
    .attr("class", "category-path")
    .attr("d", linkLineGenerator)
    .attr("stroke-width", dimensions.pathHeight);

  // labels

  const startingLabelsGroup = bounds
    .append("g")
    .style("transform", "translateX(-20px)");

  const startingLabel = startingLabelsGroup
    .append("text")
    .attr("class", "label start-label")
    .attr("y", startYPosition)
    .text(firstLabelText);

  const startLabel = startingLabelsGroup
    .append("text")
    .attr("class", "start-title")
    .attr("y", startYPosition - 65)
    .text("თანხის წყარო");

  const startingBars = startingLabelsGroup
    .append("rect")
    .attr("x", 20)
    .attr("y", (d) => startYPosition - dimensions.pathHeight / 2)
    .attr("fill", color)
    .attr("width", dimensions.endsBarWidth)
    .attr("height", dimensions.pathHeight);

  const endingLabelsGroup = bounds
    .append("g")
    .style("transform", `translateX(${dimensions.boundedWidth + 20}px)`);

  const endingLabels = endingLabelsGroup
    .selectAll(".end-label")
    .data(question.dataset)
    .enter()
    .append("text")
    .attr("class", "label end-label")
    .attr("y", (d, i) => endYScale(i) - 15)
    .text((d) => d[0]);

  const moneyMarkers = endingLabelsGroup
    .selectAll(".money-marker")
    .data(endingIds)
    .enter()
    .append("rect")
    .attr("class", "ending-marker money-marker")
    .attr("width", 15)
    .attr("height", 10)
    .attr("x", 5)
    .attr("rx", 4)
    .attr("y", (d) => endYScale(d));

  // money

  let money = [];
  const markersGroup = bounds.append("g").attr("class", "markers-group");

  const endingBarGroup = bounds
    .append("g")
    .attr("transform", `translate(${dimensions.boundedWidth}, 0)`);

  const endingNumberGroup = bounds
    .append("g")
    .attr("transform", `translate(${dimensions.boundedWidth + 210}, 0)`);

  const endingNumbers = endingNumberGroup
    .selectAll("ending-number")
    .data(question.dataset)
    .enter()
    .append("text")
    .attr("class", "ending-number")
    .text(0)
    .attr("x", 50)
    .attr("y", (d, i) => endYScale(i) + 9)
    .style("fill", "#0a9396")
    .style("font-size", 18);

  const endingBars = endingBarGroup
    .selectAll("ending-bar")
    .data(question.dataset)
    .enter()
    .append("rect")
    .attr("fill", color)
    .attr("width", (d) => 1)
    .attr("class", "ending-bar")
    .attr("height", 15)
    .attr("x", 53)
    .attr("y", (d, i) => endYScale(i) - 3);

  const endingButtonGroup = bounds
    .append("g")
    .attr("class", "buttons")
    .attr("transform", `translate(${dimensions.boundedWidth + 260}, 0)`);

  const endingPointersGroup = bounds
    .append("g")
    .attr("class", "pointers")
    .attr("transform", `translate(${dimensions.boundedWidth + 260}, 0)`);

  const endingRect = endingButtonGroup
    .append("rect")
    .attr("class", "highlight-rect")
    .attr("width", 60)
    .attr("height", 350)
    .attr("x", 80)
    .attr("y", 75)
    .attr("fill", "lightblue")
    .style("opacity", 0.15)
    .style("z-index", 1)
    .style("transition", "all 0.8s");

  const endingButtons = endingButtonGroup
    .selectAll("ending-button")
    .data(question.dataset)
    .enter()
    .append("circle")
    .attr("id", (d, i) => i)
    .attr("cx", 105)
    .attr("cy", (d, i) => endYScale(i) + 3)
    .attr("fill", "transparent")
    .attr("stroke", "#48c78e")
    .attr("stroke-width", "3")
    .attr("r", 15)
    .attr("class", "ending-button")
    .style("transition", "all 0.3s");

  const endingPointers = endingPointersGroup
    .selectAll("ending-pointer")
    .data(question.dataset)
    .enter()
    .append("img")
    .attr("src", "hand-point-left-svgrepo-com.svg")
    .attr("width", 50)
    .attr("height", 50);

  const endingSpeedArray = question.dataset.map(
    (item) => endingBarScale(item[1]) / 200
  );
  const numberSpeedArray = question.dataset.map((item) => item[1] / 3200);

  let startFilling = false;

  const maxMoney = 180;

  let wasCorrect = false;
  let isFinished = false;

  let timer;

  let wasClicked = false;

  endingButtons.on("click", (item) => {
    if (!wasClicked) {
      endingRect.style("opacity", 0);
      if (parseInt(item.target.id) === biggest[1]) {
        wasCorrect = true;
      } else {
        wasCorrect = false;
      }
      d3.selectAll(".ending-button").style("animation-name", "none");
      wasClicked = true;
      timer = d3.timer(updateMarkers);
    }
  });

  let biggestIndex = biggest[1];

  function updateMarkers(elapsed) {
    if (money.length < maxMoney) {
      money = [...money, generateMoney(elapsed)];
    }

    const xProgressAccessor = (d) => (elapsed - d.startTime) / 1100;

    const visibleMoneyMarkers = markersGroup.selectAll(".marker-rect").data(
      money.filter((d) => {
        if (xProgressAccessor(d) < 1) {
          return true;
        } else {
          startFilling = true;
          return false;
        }
      }),
      (d) => d.id
    );

    visibleMoneyMarkers
      .enter()
      .append("rect")
      .attr("class", "marker marker-rect")
      .attr("width", 15)
      .attr("height", 10)
      .attr("rx", 3)
      .style("opacity", 0);

    visibleMoneyMarkers.exit().remove();

    const markers = d3.selectAll(".marker");

    markers
      .style("transform", (d) => {
        const x = xScale(xProgressAccessor(d));
        const yStart = startYPosition;
        const yEnd = endYScale(d.endingPlace);
        const yChange = yEnd - yStart;
        const yProgress = yTransitionProgressScale(xProgressAccessor(d));
        const y = yStart + yChange * yProgress + d.yJitter;

        return `translate(${x}px, ${y}px)`;
      })
      .attr("fill", color)
      .transition()
      .duration(100)
      .style("opacity", (d) => (xScale(xProgressAccessor(d)) < 10 ? 0 : 0.75));

    if (startFilling) {
      endingBars.attr("width", (d, i) => {
        if (endingBars.nodes()[i].getBBox().width < endingBarScale(d[1])) {
          return endingBars.nodes()[i].getBBox().width + endingSpeedArray[i];
        } else {
          isFinished = true;
          return endingBars.nodes()[i].getBBox().width;
        }
      });
      endingNumbers.text((d, i) => {
        if (endingBars.nodes()[i].getBBox().width < endingBarScale(d[1])) {
          return Math.floor(
            parseInt(endingNumbers.nodes()[i].textContent) + numberSpeedArray[i]
          );
        } else {
          endingButtons
            .attr("fill", (d, i) => (i == biggestIndex ? "#48c78e" : "red"))
            .attr("stroke", (d, i) => (i == biggestIndex ? "#48c78e" : "red"));
          return parseInt(d[1]);
        }
      });
    }

    if (isFinished) {
      wasClicked = false;
      timer.stop();
      let popupText = d3.select(".popupText");
      if (wasCorrect) {
        correctAnswers++;
        popupText.html(question.text[1]);
        d3.select(".popup").style("border", "3px solid #48c78e");
      } else {
        popupText.html(question.text[2]);
        d3.select(".popup").style("border", "3px solid red");
      }
      d3.select(".popup").style("opacity", "100");
    }
  }

  d3.select("#nextButton").on("click", () => {
    if (currentQuestion == questions.length - 1) {
      if (correctAnswers >= 4) {
        d3.select(".popupText").html(winText);
        d3.select(".shareBtn")
          .style("position", "relative")
          .style("left", 0)
          .style("opacity", "100%");
        d3.select(".popup").style("border", "2px solid green");
      } else {
        d3.select(".popupText").html(loseText);
        d3.select(".shareBtn")
          .style("position", "relative")
          .style("left", 0)
          .style("opacity", "100%");
        d3.select(".popup").style("border", "2px solid red");
      }

      currentQuestion = 0;
      d3.select("#nextButton")
        .text("ხელახლა ცდა")
        .on("click", () => {
          d3.select("svg").remove();
          d3.select(".shareBtn")
            .style("position", "absolute")
            .style("left", "3000px")
            .style("opacity", 0);
          d3.select(".popup").style("opacity", 0);
          chart(questions[currentQuestion]);
        });
    } else {
      d3.select("svg").remove();
      currentQuestion++;
      d3.select(".popup").style("opacity", 0);
      chart(questions[currentQuestion]);
    }
  });
}

start();

function start() {
  d3.select(".popupText").html(initialText);
  d3.select(".popup").style("opacity", 100);
  d3.select("#nextButton")
    .text("დაწყება")
    .on("click", () => {
      d3.select(".popup").style("opacity", 0);
      chart(questions[currentQuestion]);
      d3.select("#nextButton")
        .text("შემდეგი")
        .style("position", "relative")
        .style("left", "unset");
    });
}

const getRandomNumberInRange = (min, max) => Math.random() * (max - min) + min;

const getRandomValue = (arr) =>
  arr[Math.floor(getRandomNumberInRange(0, arr.length))];
