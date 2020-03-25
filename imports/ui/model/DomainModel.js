/**
 * DomainModelClass
 *    children: func
 *    component: Component func
 *    exact: bool
 *    strict: bool
 *    location: object
 *    sensitive: bool
 *    path: string | [string]
 *    render: func
 *
 */
export default class DomainModel {
  #children;
  #component;
  #exact;
  #strict;
  #location;
  #sensitive;
  #path;
  #render;

  constructor({
    children,
    component,
    exact,
    strict,
    location,
    sensitive,
    path,
    render,
  }) {
    this.#children = children;
    this.#component = component;
    this.#exact = exact;
    this.#strict = strict;
    this.#location = location;
    this.#sensitive = sensitive;
    this.#path = path;
    this.#render = render;
  }
  get children() {
    return this.#children;
  }
  set children(children) {
    this.#children = children;
  }
  get component() {
    return this.#component;
  }
  set component(component) {
    this.#component = component;
  }
  get exact() {
    return this.#exact;
  }
  set exact(exact) {
    this.#exact = exact;
  }
  get strict() {
    return this.#strict;
  }
  set strict(strict) {
    this.#strict = strict;
  }
  get location() {
    return this.#location;
  }
  set location(location) {
    this.#location = location;
  }
  get sensitive() {
    return this.#sensitive;
  }
  set sensitive(sensitive) {
    this.#sensitive = sensitive;
  }
  get path() {
    return this.#path;
  }
  set path(path) {
    this.#path = path;
  }
  get render() {
    return this.#render;
  }
  set render(render) {
    this.#render = render;
  }

  getProps = () => {
    return {
      children: this.#children,
      component: this.#component,
      exact: this.#exact,
      strict: this.#strict,
      location: this.#location,
      sensitive: this.#sensitive,
      path: this.#path,
      render: this.#render,
    };
  };
}
