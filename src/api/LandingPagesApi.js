/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.61
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * LandingPages service.
 * @module api/LandingPagesApi
 */

/**
 * Constructs a new LandingPagesApi. 
 * @alias module:api/LandingPagesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete landing page
   * Delete a landing page.
   * @param {String} pageId The unique id for the page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.deletePageWithHttpInfo = function(pageId) {
    var postBody = null;

    // verify the required parameter 'pageId' is set
    if (pageId === undefined || pageId === null) {
      throw new Error("Missing the required parameter 'pageId' when calling ");
    }

    var pathParams = {
      'page_id': pageId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages/{page_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete landing page
   * Delete a landing page.
   * @param {String} pageId The unique id for the page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.deletePage = function(pageId) {
    return this.deletePageWithHttpInfo(pageId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List landing pages
   * Get all landing pages.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
   */
  this.getAllWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'sort_dir': opts['sortDir'],
      'sort_field': opts['sortField'],
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List landing pages
   * Get all landing pages.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
   */
  this.getAll = function(opts) {
    return this.getAllWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get landing page info
   * Get information about a specific page.
   * @param {String} pageId The unique id for the page.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
   */
  this.getPageWithHttpInfo = function(pageId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'pageId' is set
    if (pageId === undefined || pageId === null) {
      throw new Error("Missing the required parameter 'pageId' when calling ");
    }

    var pathParams = {
      'page_id': pageId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages/{page_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get landing page info
   * Get information about a specific page.
   * @param {String} pageId The unique id for the page.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
   */
  this.getPage = function(pageId, opts) {
    return this.getPageWithHttpInfo(pageId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get landing page content
   * Get the the HTML for your landing page.
   * @param {String} pageId The unique id for the page.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPageContent} and HTTP response
   */
  this.getPageContentWithHttpInfo = function(pageId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'pageId' is set
    if (pageId === undefined || pageId === null) {
      throw new Error("Missing the required parameter 'pageId' when calling ");
    }

    var pathParams = {
      'page_id': pageId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages/{page_id}/content', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get landing page content
   * Get the the HTML for your landing page.
   * @param {String} pageId The unique id for the page.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPageContent}
   */
  this.getPageContent = function(pageId, opts) {
    return this.getPageContentWithHttpInfo(pageId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Update landing page
   * Update a landing page.
   * @param {String} pageId The unique id for the page.
   * @param {module:model/LandingPage2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
   */
  this.updatePageWithHttpInfo = function(pageId, body) {
    var postBody = body;

    // verify the required parameter 'pageId' is set
    if (pageId === undefined || pageId === null) {
      throw new Error("Missing the required parameter 'pageId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'page_id': pageId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages/{page_id}', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Update landing page
   * Update a landing page.
   * @param {String} pageId The unique id for the page.
   * @param {module:model/LandingPage2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
   */
  this.updatePage = function(pageId, body) {
    return this.updatePageWithHttpInfo(pageId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add landing page
   * Create a new Mailchimp landing page.
   * @param {module:model/LandingPage1} body 
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.useDefaultList Will create the Landing Page using the account's Default List instead of requiring a list_id.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
   */
  this.createWithHttpInfo = function(body, opts) {
    opts = opts || {};
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
      'use_default_list': opts['useDefaultList']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add landing page
   * Create a new Mailchimp landing page.
   * @param {module:model/LandingPage1} body 
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.useDefaultList Will create the Landing Page using the account's Default List instead of requiring a list_id.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
   */
  this.create = function(body, opts) {
    return this.createWithHttpInfo(body, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Publish landing page
   * Publish a landing page that is in draft, unpublished, or has been previously published and edited.
   * @param {String} pageId The unique id for the page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LandingPage} and HTTP response
   */
  this.publishPageWithHttpInfo = function(pageId) {
    var postBody = null;

    // verify the required parameter 'pageId' is set
    if (pageId === undefined || pageId === null) {
      throw new Error("Missing the required parameter 'pageId' when calling ");
    }

    var pathParams = {
      'page_id': pageId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages/{page_id}/actions/publish', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Publish landing page
   * Publish a landing page that is in draft, unpublished, or has been previously published and edited.
   * @param {String} pageId The unique id for the page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LandingPage}
   */
  this.publishPage = function(pageId) {
    return this.publishPageWithHttpInfo(pageId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Unpublish landing page
   * Unpublish a landing page that is in draft or has been published.
   * @param {String} pageId The unique id for the page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.unpublishPageWithHttpInfo = function(pageId) {
    var postBody = null;

    // verify the required parameter 'pageId' is set
    if (pageId === undefined || pageId === null) {
      throw new Error("Missing the required parameter 'pageId' when calling ");
    }

    var pathParams = {
      'page_id': pageId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/landing-pages/{page_id}/actions/unpublish', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Unpublish landing page
   * Unpublish a landing page that is in draft or has been published.
   * @param {String} pageId The unique id for the page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.unpublishPage = function(pageId) {
    return this.unpublishPageWithHttpInfo(pageId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
