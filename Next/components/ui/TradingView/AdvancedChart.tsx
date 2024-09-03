// import {
//   ContextType,
//   createContext,
//   forwardRef,
//   Ref,
//   useEffect,
//   useImperativeHandle,
//   useRef,
// } from "react";

// interface ContextType {
//   method1(): void;
//   methodn(): void;
// }

// const Context = createContext<ContextType | undefined>(undefined);

// interface MainComponentProps {
//   data: any[];
// }

// export const MainComponent = (props: MainComponentProps) => (
//   <div ref={chartReference}>
//     <ParentComponent {...props} container={container} />
//   </div>
// );

// interface ParentComponentProps {
//   container: Ref<HTMLDivElement>;
// }

// export const ParentComponent = forwardRef(
//   (props: ParentComponentProps, ref) => {
//     const internalRef = useRef({
//       method1() {},
//       methodn() {},
//     });

//     useEffect(() => () => {}, []);

//     useEffect(() => () => {}, []);

//     useImperativeHandle(ref, () => {}, []);

//     return (
//       <Context.Provider value={internalRef.current}>
//         {props.children}
//       </Context.Provider>
//     );
//   }
// );
// ParentComponent.displayName = "ParentComponent";

// export const ChildComponent = forwardRef((props, ref) => {
//   const internalRef = useRef({
//     method1() {},
//     methodn() {},
//   });

//   useEffect(() => () => {}, []);

//   useEffect(() => () => {}, []);

//   useImperativeHandle(ref, () => {}, []);

//   return (
//     <Context.Provider value={internalRef.current}>
//       {props.children}
//     </Context.Provider>
//   );
// });
// ChildComponent.displayName = "ChildComponent";
