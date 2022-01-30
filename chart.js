const questions = [
  {
    dataset: [
      ["ლეიბორისტული პარტია", 215480],
      ["ქართული ოცნება", 31391],
      ["მრეწველობა გადაარჩენს საქართველოს", 128869],
    ],
    text: [
      "რომელ პარტიას ქონდა მივლინებებთან დაკავშირებული ყველაზე დიდი ხარჯი 2017 წელს?",
      "სწორად გამოიცანი! 2017 წელს საქართველოს ლეიბორისტული პარტია 215,480 ლარის ოდენობის მივლინების ხარჯებით  პირველ ადგილზე გავიდა. მათი ხარჯები ყველა პარტიის ერთად აღებული ხარჯების მეოთხედზე მეტს შეადგენდა. მათ მოსდევენ პარტია “მრეწველობა გადაარჩენს საქართველოს” და საქართველოს კონსერვატიული პარტია, რომლებმაც 2017 წელს 128,869 და 102,655 ლარი დახარჯეს. ქართული ოცნება-დემოკრატიული საქართველოს ანალოგიური ხარჯები 31,391 ლარს შეადგენდა, ხოლო ერთიანი ნაციონალური მოძრაობის - 18,637 ლარს.",
      "ვერ გამოიცანი! 2017 წელს საქართველოს ლეიბორისტული პარტია 215,480 ლარის ოდენობის მივლინების ხარჯებით  პირველ ადგილზე გავიდა. მათი ხარჯები ყველა პარტიის ერთად აღებული ხარჯების მეოთხედზე მეტს შეადგენდა. მათ მოსდევენ პარტია “მრეწველობა გადაარჩენს საქართველოს” და საქართველოს კონსერვატიული პარტია, რომლებმაც 2017 წელს 128,869 და 102,655 ლარი დახარჯეს. ქართული ოცნება-დემოკრატიული საქართველოს ანალოგიური ხარჯები 31,391 ლარს შეადგენდა, ხოლო ერთიანი ნაციონალური მოძრაობის - 18,637 ლარს.",
    ],
  },
  {
    dataset: [
      ["ნაციონალური მოძრაობა", 1840720],
      ["ევროპული საქართველო", 1516104],
      ["პატრიოტთა ალიანსი", 1959750],
    ],
    text: [
      "აღნიშნული პარტიებიდან რომელმა მიიღო ყველაზე დიდი ოდენობით დაფინანსება სახელმწიფო ბიუჯეტიდან 2020 წელს?",
      "სწორად გამოიცანი! 2020 წლის სახელმწიფო ბიუჯეტიდან საქართველოს პატრიოტთა ალიანსმა 1,959,749.72 ლარი მიიღო. პარტიას სახელმწიფო დაფინანსებით მხოლოდ ქართულმა ოცნებამ გაუსწრო, რომელმაც 4,222,545 ლარი მიიღო ბიუჯეტიდან. ერთიანმა ნაციონალურმა მოძრაობამ  1,840,720 ლარის, ხოლო პარტიამ “ევროპული საქართველო - მოძრაობა თავისუფლებისთვის”  1,516,104 ლარის ოდენობის დაფინანსება მიიღეს",
      "ვერ გამოიცანი! 2020 წლის სახელმწიფო ბიუჯეტიდან საქართველოს პატრიოტთა ალიანსმა 1,959,749.72 ლარი მიიღო. პარტიას სახელმწიფო დაფინანსებით მხოლოდ ქართულმა ოცნებამ გაუსწრო, რომელმაც 4,222,545 ლარი მიიღო ბიუჯეტიდან. ერთიანმა ნაციონალურმა მოძრაობამ  1,840,720 ლარის, ხოლო პარტიამ “ევროპული საქართველო - მოძრაობა თავისუფლებისთვის”  1,516,104 ლარის ოდენობის დაფინანსება მიიღეს.",
    ],
  },
];

let currentQuestion = 0;

async function chart(question) {
  d3.select("#question").text(question.text[0]);

  let biggest = [0, 0];
  question.dataset.forEach((item, index) => {
    if (item[1] > biggest[0]) {
      biggest = [item[1], index];
    }
  });

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

  const firstLabelText = "ბიუჯეტი";

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
      left: 120,
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
    .attr("y", (d, i) => endYScale(i) + 9);

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

  const endingRect = endingButtonGroup
    .append("rect")
    .attr("class", "highlight-rect")
    .attr("width", 60)
    .attr("height", 350)
    .attr("x", 80)
    .attr("y", 75)
    .attr("fill", "lightblue")
    .style("opacity", 0.5)
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
    .attr("stroke", "green")
    .attr("stroke-width", "3")
    .attr("r", 15)
    .attr("class", "ending-button")
    .style("transition", "all 0.3s");

  const endingSpeedArray = question.dataset.map(
    (item) => endingBarScale(item[1]) / 200
  );
  const numberSpeedArray = question.dataset.map((item) => item[1] / 3200);

  let startFilling = false;

  const maxMoney = 180;

  let wasCorrect = false;
  let isFinished = false;

  let timer;

  endingButtons.on("click", (item) => {
    endingRect.style("opacity", 0);
    if (parseInt(item.target.id) === biggest[1]) {
      wasCorrect = true;
    } else {
      wasCorrect = false;
    }
    timer = d3.timer(updateMarkers);
  });

  let biggestIndex = biggest[1];

  function updateMarkers(elapsed) {
    if (money.length < maxMoney) {
      money = [...money, generateMoney(elapsed)];
    }

    const xProgressAccessor = (d) => (elapsed - d.startTime) / 3200;

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
            .attr("fill", (d, i) => (i == biggestIndex ? "green" : "red"))
            .attr("stroke", (d, i) => (i == biggestIndex ? "green" : "red"));
          return parseInt(d[1]);
        }
      });
    }

    if (isFinished) {
      timer.stop();
      let popupText = d3.select(".popupText");
      if (wasCorrect) {
        popupText.text(question.text[1]);
        d3.select(".popup").style("border", "3px solid green");
      } else {
        popupText.text(question.text[2]);
        d3.select(".popup").style("border", "3px solid red");
      }
      d3.select(".popup").style("opacity", "100");
    }
  }

  d3.select("#nextButton").on("click", () => {
    d3.select("svg").remove();
    currentQuestion++;
    d3.select(".popup").style("opacity", 0);
    chart(questions[currentQuestion]);
  });
}

chart(questions[currentQuestion]);

const getRandomNumberInRange = (min, max) => Math.random() * (max - min) + min;

const getRandomValue = (arr) =>
  arr[Math.floor(getRandomNumberInRange(0, arr.length))];

const sentenceCase = (str) =>
  [str.slice(0, 1).toUpperCase(), str.slice(1)].join("");
