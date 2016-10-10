/**
 *
 */
import { slugify } from 'underscore.string';


/**
 *
 */
const scopedRegex = /^(?:@([^/]+?)[/])([^/]+?)$/;
const isScoped = name => scopedRegex.test(name);

export default {
  repoName: name => (isScoped(name) ? name.match(scopedRegex)[2] : name),
  slugify: name => (isScoped(name) ? name : slugify(name)),
};
