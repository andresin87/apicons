import Resolutions from './resolutions';

const resolvers = {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },
  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};

export default resolvers;