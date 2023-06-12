import Image1 from '../images/rand.jpg';
import Image2 from '../images/ai2.png';
import Image3 from '../images/prime.jpg';
export const articleData = [
    {
      id: 1,
      title: "Effects of Image Resolution on Accuracy and Robustness in CNNs and Smoothed Classifiers",
      cover: Image1,
      authors: ["Daniel A. Nissan"],
      publication: "",
      year: 2023,
      abstract: "Generalisation matters where training data ends and test data begins. It is easy for deep neural networks (DNNs) to memorize the training data set but separating the feature space too strictly leads to poor performance on novel data points, whereas a linear separation in most cases does not suffice for the training data to begin with. This bias-variance trade-off leads to the study of generalisation which is what allows us to walk the fine line between overfitting and underfitting. There are many miscellaneous strategies which can enhance the effectiveness of generalisation in machine learning models, such as data augmentation, selection of appropriate activation functions, hyperparameter tweaking, early stopping, and batch normalisation. However, DNNs’ accuracy is more reliable than their robustness. A promising and simple technique to obtain certified robustness is randomized smoothing. In this paper, I analyse accuracy and robustness of CNN classifiers before and after the application of randomized smoothing in the context of the MNIST dataset. Furthermore, I examine how this behaviour extrapolates to different input space dimensionalities and network architectures. Results showed: Modern CNN architectures can correctly classify noised MNIST samples under heavy noise that is out of range for regular smoothing (σ=255) therefore completely flattening the trade-off across all input scales in accuracy and robustness one would usually expect between regular and smoothed classifiers. This is hypothesized to be a consequence of the low complexity of MNIST thus warranting further examination in more complex datasets",

      keywords: ["Machine Learning", "CNNs", "Randomized Smoothing", "Robustness", "MNIST"],
    },
    {
      id: 2,
      title: "On  Bell’s Theorem & Free Will Misconceptions",
      cover: Image2,
      authors: ["Daniel A. Nissan"],
      publication: "",
      year: 2023,
      abstract:"In this paper, I argue why free will while being an intuitive notion, does not withstand scientific scrutiny. Furthermore, I give a brief history of the inception of Bell-type inequalities and we try to disentangle the connection between the concept of free will and the assumptions underlying Bell’s theorem which are often taken as one and the same. I list notable criticisms of Bell’s underlying assumptions and discuss successful experiments and their interpretations. Finally, I examine the implications of the violations of statistical independence in the class of super-deterministic theories and what that would mean for free will in a deterministic setting"
      ,
      keywords: ["Bell's Theorem", "Quantum Physics", "Free Will", "Super-Determinism"],
    },
    {
      id: 3,
      title: "Die Verteilung der Primzahlen und ihr Zusammenhang mit der Riemannschen Zetafunktion",
      cover: Image3,
      authors: ["Daniel A. Nissan"],
      publication: "International Journal of Logistics",
      year: 2018,
      abstract:  "Diese vorwissenschaftliche Arbeit widmet sich den Primzahlen, insbesondere ihrer Verteilung. Die Aufgabe vorherzusagen, wo die nächste Primzahl aufzufinden ist, sollte keineswegs unterschätzt werden. Versucht man sich an folgender Frage: Welche Primzahl folgt nach 139? So kann man ohne großen Aufwand und mit Sicherheit sagen, dass es sich um 149 handelt. Das Ganze ändert sich jedoch, wenn von Zahlen mit 10.000.000 Stellen oder mehr die Rede ist. Irgendwann stoßen unsere jetzigen Computer an ihre Grenzen. Dieses Prinzip nutzt auch zum Beispiel die RSA-Verschlüsselung: Der Aufwand zwei Primzahlen zu multiplizieren, ist viel geringer als der, in deren Produkt einen Primfaktor zu finden. Dadurch rechtfertigt sich die Suche nach solch gigantischen Primzahlen. Es stellt sich heraus, dass es durchaus effizientere Methoden, geprägt von hoch zahlentheoretischem Charakter, gibt. Eine davon, nämlich die Riemannsche-Primzahlenfunktion, soll den Höhepunkt dieser Arbeit bilden. Es werden des Weiteren grundlegende Eigenschaften der Primzahlen präsentiert, welche das Fundament für das Verständnis der Problemstellung schaffen. Darauf folgen eine kurze geschichtliche Abhandlung und die Zeta-Funktion, einhergehend mit immer wiederkehrenden visuellen Unterstützungen in Form von Graphen. Schließlich mündet diese vorwissenschaftliche Arbeit in dem Endergebnis von Riemanns bedeutendstem Beitrag zur Zahlentheorie und ihren wichtigsten Erkenntnissen.",
      keywords: ["Prime Numbers", "VWA", "Rieman Zeta function", "Harmonic Analysis"],
    },
  ];
  
   