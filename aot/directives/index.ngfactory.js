/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core/src/linker/ng_module_factory", "../../directives/index", "@angular/common/src/common_module", "@angular/core/src/application_module", "@angular/platform-browser/src/browser", "@angular/forms/src/directives", "@angular/forms/src/form_providers", "@angular/common/src/localization", "@angular/core/src/application_init", "@angular/core/src/testability/testability", "@angular/core/src/application_ref", "@angular/core/src/linker/compiler", "@angular/platform-browser/src/dom/events/hammer_gestures", "@angular/platform-browser/src/dom/events/event_manager", "@angular/platform-browser/src/dom/shared_styles_host", "@angular/platform-browser/src/dom/dom_renderer", "@angular/platform-browser/src/security/dom_sanitization_service", "@angular/core/src/animation/animation_queue", "@angular/core/src/linker/view_utils", "@angular/platform-browser/src/browser/title", "@angular/forms/src/directives/radio_control_value_accessor", "@angular/forms/src/form_builder", "@angular/core/src/i18n/tokens", "@angular/core/src/application_tokens", "@angular/platform-browser/src/dom/events/dom_events", "@angular/platform-browser/src/dom/events/key_events", "@angular/core/src/zone/ng_zone", "@angular/platform-browser/src/dom/debug/ng_probe", "@angular/core/src/console", "@angular/core/src/error_handler", "@angular/platform-browser/src/dom/dom_tokens", "@angular/platform-browser/src/dom/animation_driver", "@angular/core/src/render/api", "@angular/core/src/security", "@angular/core/src/change_detection/differs/iterable_differs", "@angular/core/src/change_detection/differs/keyvalue_differs"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var import0, import1, import2, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16, import17, import18, import19, import20, import21, import23, import24, import25, import26, import27, import28, import29, import30, import31, import32, import33, import34, import35, import36, GooglePlaceModuleInjector, GooglePlaceModuleNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            },
            function (import10_1) {
                import10 = import10_1;
            },
            function (import11_1) {
                import11 = import11_1;
            },
            function (import12_1) {
                import12 = import12_1;
            },
            function (import13_1) {
                import13 = import13_1;
            },
            function (import14_1) {
                import14 = import14_1;
            },
            function (import15_1) {
                import15 = import15_1;
            },
            function (import16_1) {
                import16 = import16_1;
            },
            function (import17_1) {
                import17 = import17_1;
            },
            function (import18_1) {
                import18 = import18_1;
            },
            function (import19_1) {
                import19 = import19_1;
            },
            function (import20_1) {
                import20 = import20_1;
            },
            function (import21_1) {
                import21 = import21_1;
            },
            function (import23_1) {
                import23 = import23_1;
            },
            function (import24_1) {
                import24 = import24_1;
            },
            function (import25_1) {
                import25 = import25_1;
            },
            function (import26_1) {
                import26 = import26_1;
            },
            function (import27_1) {
                import27 = import27_1;
            },
            function (import28_1) {
                import28 = import28_1;
            },
            function (import29_1) {
                import29 = import29_1;
            },
            function (import30_1) {
                import30 = import30_1;
            },
            function (import31_1) {
                import31 = import31_1;
            },
            function (import32_1) {
                import32 = import32_1;
            },
            function (import33_1) {
                import33 = import33_1;
            },
            function (import34_1) {
                import34 = import34_1;
            },
            function (import35_1) {
                import35 = import35_1;
            },
            function (import36_1) {
                import36 = import36_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular 2 template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            GooglePlaceModuleInjector = (function (_super) {
                __extends(GooglePlaceModuleInjector, _super);
                function GooglePlaceModuleInjector(parent) {
                    return _super.call(this, parent, [], []) || this;
                }
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_LOCALE_ID_7", {
                    get: function () {
                        if ((this.__LOCALE_ID_7 == null)) {
                            (this.__LOCALE_ID_7 = import3._localeFactory(this.parent.get(import23.LOCALE_ID, null)));
                        }
                        return this.__LOCALE_ID_7;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_NgLocalization_8", {
                    get: function () {
                        if ((this.__NgLocalization_8 == null)) {
                            (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7));
                        }
                        return this.__NgLocalization_8;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_ApplicationRef_13", {
                    get: function () {
                        if ((this.__ApplicationRef_13 == null)) {
                            (this.__ApplicationRef_13 = this._ApplicationRef__12);
                        }
                        return this.__ApplicationRef_13;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_Compiler_14", {
                    get: function () {
                        if ((this.__Compiler_14 == null)) {
                            (this.__Compiler_14 = new import11.Compiler());
                        }
                        return this.__Compiler_14;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_APP_ID_15", {
                    get: function () {
                        if ((this.__APP_ID_15 == null)) {
                            (this.__APP_ID_15 = import24._appIdRandomProviderFactory());
                        }
                        return this.__APP_ID_15;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_DOCUMENT_16", {
                    get: function () {
                        if ((this.__DOCUMENT_16 == null)) {
                            (this.__DOCUMENT_16 = import4._document());
                        }
                        return this.__DOCUMENT_16;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
                    get: function () {
                        if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                            (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig());
                        }
                        return this.__HAMMER_GESTURE_CONFIG_17;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
                    get: function () {
                        if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                            (this.__EVENT_MANAGER_PLUGINS_18 = [
                                new import25.DomEventsPlugin(),
                                new import26.KeyEventsPlugin(),
                                new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                            ]);
                        }
                        return this.__EVENT_MANAGER_PLUGINS_18;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_EventManager_19", {
                    get: function () {
                        if ((this.__EventManager_19 == null)) {
                            (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import27.NgZone)));
                        }
                        return this.__EventManager_19;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_DomSharedStylesHost_20", {
                    get: function () {
                        if ((this.__DomSharedStylesHost_20 == null)) {
                            (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16));
                        }
                        return this.__DomSharedStylesHost_20;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_AnimationDriver_21", {
                    get: function () {
                        if ((this.__AnimationDriver_21 == null)) {
                            (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
                        }
                        return this.__AnimationDriver_21;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_DomRootRenderer_22", {
                    get: function () {
                        if ((this.__DomRootRenderer_22 == null)) {
                            (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
                        }
                        return this.__DomRootRenderer_22;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_RootRenderer_23", {
                    get: function () {
                        if ((this.__RootRenderer_23 == null)) {
                            (this.__RootRenderer_23 = import28._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import28.NgProbeToken, null), this.parent.get(import10.NgProbeToken, null)));
                        }
                        return this.__RootRenderer_23;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_DomSanitizer_24", {
                    get: function () {
                        if ((this.__DomSanitizer_24 == null)) {
                            (this.__DomSanitizer_24 = new import16.DomSanitizerImpl());
                        }
                        return this.__DomSanitizer_24;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_Sanitizer_25", {
                    get: function () {
                        if ((this.__Sanitizer_25 == null)) {
                            (this.__Sanitizer_25 = this._DomSanitizer_24);
                        }
                        return this.__Sanitizer_25;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_AnimationQueue_26", {
                    get: function () {
                        if ((this.__AnimationQueue_26 == null)) {
                            (this.__AnimationQueue_26 = new import17.AnimationQueue(this.parent.get(import27.NgZone)));
                        }
                        return this.__AnimationQueue_26;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_ViewUtils_27", {
                    get: function () {
                        if ((this.__ViewUtils_27 == null)) {
                            (this.__ViewUtils_27 = new import18.ViewUtils(this._RootRenderer_23, this._Sanitizer_25, this._AnimationQueue_26));
                        }
                        return this.__ViewUtils_27;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_IterableDiffers_28", {
                    get: function () {
                        if ((this.__IterableDiffers_28 == null)) {
                            (this.__IterableDiffers_28 = import3._iterableDiffersFactory());
                        }
                        return this.__IterableDiffers_28;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_KeyValueDiffers_29", {
                    get: function () {
                        if ((this.__KeyValueDiffers_29 == null)) {
                            (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory());
                        }
                        return this.__KeyValueDiffers_29;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_SharedStylesHost_30", {
                    get: function () {
                        if ((this.__SharedStylesHost_30 == null)) {
                            (this.__SharedStylesHost_30 = this._DomSharedStylesHost_20);
                        }
                        return this.__SharedStylesHost_30;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_Title_31", {
                    get: function () {
                        if ((this.__Title_31 == null)) {
                            (this.__Title_31 = new import19.Title());
                        }
                        return this.__Title_31;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_RadioControlRegistry_32", {
                    get: function () {
                        if ((this.__RadioControlRegistry_32 == null)) {
                            (this.__RadioControlRegistry_32 = new import20.RadioControlRegistry());
                        }
                        return this.__RadioControlRegistry_32;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GooglePlaceModuleInjector.prototype, "_FormBuilder_33", {
                    get: function () {
                        if ((this.__FormBuilder_33 == null)) {
                            (this.__FormBuilder_33 = new import21.FormBuilder());
                        }
                        return this.__FormBuilder_33;
                    },
                    enumerable: true,
                    configurable: true
                });
                GooglePlaceModuleInjector.prototype.createInternal = function () {
                    this._CommonModule_0 = new import2.CommonModule();
                    this._ApplicationModule_1 = new import3.ApplicationModule();
                    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
                    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
                    this._FormsModule_4 = new import6.FormsModule();
                    this._ReactiveFormsModule_5 = new import6.ReactiveFormsModule();
                    this._GooglePlaceModule_6 = new import1.GooglePlaceModule();
                    this._ErrorHandler_9 = import4.errorHandler();
                    this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER, null));
                    this._Testability_11 = new import9.Testability(this.parent.get(import27.NgZone));
                    this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import27.NgZone), this.parent.get(import29.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import9.TestabilityRegistry, null), this._Testability_11);
                    return this._GooglePlaceModule_6;
                };
                GooglePlaceModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.CommonModule)) {
                        return this._CommonModule_0;
                    }
                    if ((token === import3.ApplicationModule)) {
                        return this._ApplicationModule_1;
                    }
                    if ((token === import4.BrowserModule)) {
                        return this._BrowserModule_2;
                    }
                    if ((token === import5.InternalFormsSharedModule)) {
                        return this._InternalFormsSharedModule_3;
                    }
                    if ((token === import6.FormsModule)) {
                        return this._FormsModule_4;
                    }
                    if ((token === import6.ReactiveFormsModule)) {
                        return this._ReactiveFormsModule_5;
                    }
                    if ((token === import1.GooglePlaceModule)) {
                        return this._GooglePlaceModule_6;
                    }
                    if ((token === import23.LOCALE_ID)) {
                        return this._LOCALE_ID_7;
                    }
                    if ((token === import7.NgLocalization)) {
                        return this._NgLocalization_8;
                    }
                    if ((token === import30.ErrorHandler)) {
                        return this._ErrorHandler_9;
                    }
                    if ((token === import8.ApplicationInitStatus)) {
                        return this._ApplicationInitStatus_10;
                    }
                    if ((token === import9.Testability)) {
                        return this._Testability_11;
                    }
                    if ((token === import10.ApplicationRef_)) {
                        return this._ApplicationRef__12;
                    }
                    if ((token === import10.ApplicationRef)) {
                        return this._ApplicationRef_13;
                    }
                    if ((token === import11.Compiler)) {
                        return this._Compiler_14;
                    }
                    if ((token === import24.APP_ID)) {
                        return this._APP_ID_15;
                    }
                    if ((token === import31.DOCUMENT)) {
                        return this._DOCUMENT_16;
                    }
                    if ((token === import12.HAMMER_GESTURE_CONFIG)) {
                        return this._HAMMER_GESTURE_CONFIG_17;
                    }
                    if ((token === import13.EVENT_MANAGER_PLUGINS)) {
                        return this._EVENT_MANAGER_PLUGINS_18;
                    }
                    if ((token === import13.EventManager)) {
                        return this._EventManager_19;
                    }
                    if ((token === import14.DomSharedStylesHost)) {
                        return this._DomSharedStylesHost_20;
                    }
                    if ((token === import32.AnimationDriver)) {
                        return this._AnimationDriver_21;
                    }
                    if ((token === import15.DomRootRenderer)) {
                        return this._DomRootRenderer_22;
                    }
                    if ((token === import33.RootRenderer)) {
                        return this._RootRenderer_23;
                    }
                    if ((token === import16.DomSanitizer)) {
                        return this._DomSanitizer_24;
                    }
                    if ((token === import34.Sanitizer)) {
                        return this._Sanitizer_25;
                    }
                    if ((token === import17.AnimationQueue)) {
                        return this._AnimationQueue_26;
                    }
                    if ((token === import18.ViewUtils)) {
                        return this._ViewUtils_27;
                    }
                    if ((token === import35.IterableDiffers)) {
                        return this._IterableDiffers_28;
                    }
                    if ((token === import36.KeyValueDiffers)) {
                        return this._KeyValueDiffers_29;
                    }
                    if ((token === import14.SharedStylesHost)) {
                        return this._SharedStylesHost_30;
                    }
                    if ((token === import19.Title)) {
                        return this._Title_31;
                    }
                    if ((token === import20.RadioControlRegistry)) {
                        return this._RadioControlRegistry_32;
                    }
                    if ((token === import21.FormBuilder)) {
                        return this._FormBuilder_33;
                    }
                    return notFoundResult;
                };
                GooglePlaceModuleInjector.prototype.destroyInternal = function () {
                    this._ApplicationRef__12.ngOnDestroy();
                };
                return GooglePlaceModuleInjector;
            }(import0.NgModuleInjector));
            exports_1("GooglePlaceModuleNgFactory", GooglePlaceModuleNgFactory = new import0.NgModuleFactory(GooglePlaceModuleInjector, import1.GooglePlaceModule));
        }
    };
});
//# sourceMappingURL=index.ngfactory.js.map