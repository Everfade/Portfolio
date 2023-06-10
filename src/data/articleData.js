import Image1 from '../images/ai.png';
import Image2 from '../images/ai2.png';
import Image3 from '../images/blockchain.png';
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
      title: "On Free Will And Bell’s Theorem Misconceptions",
      cover: Image2,
      authors: ["Daniel A. Nissan"],
      publication: "",
      year: 2023,
      abstract:"In this paper, I argue why free will while being an intuitive notion, does not withstand scientific scrutiny. Furthermore, I give a brief history of the inception of Bell-type inequalities and we try to disentangle the connection between the concept of free will and the assumptions underlying Bell’s theorem which are often taken as one and the same. I list notable criticisms of Bell’s underlying assumptions and discuss successful experiments and their interpretations. Finally, I examine the implications of the violations of statistical independence in the class of super-deterministic theories and what that would mean for free will in a deterministic setting"
      ,
      keywords: ["climate change", "biodiversity", "ecosystems", "global warming", "environment"],
    },
    {
      id: 3,
      title: "Exploring the Role of Blockchain in Supply Chain Management",
      cover: Image3,
      authors: ["Michael Brown", "Jennifer Lee"],
      publication: "International Journal of Logistics",
      year: 2023,
      abstract: "This study examines the potential of blockchain technology in revolutionizing supply chain management. It investigates the benefits offered by blockchain, such as enhanced transparency, traceability, and security in supply chains. The paper explores real-world use cases and discusses challenges in implementing blockchain-based solutions. By analyzing the current landscape and future prospects, this research provides valuable insights into the role of blockchain in transforming supply chain operations.",
      keywords: ["blockchain", "supply chain management", "transparency", "traceability", "security"],
    },
  ];
  
   