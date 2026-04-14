# `catalogIntegrationIcebergRest` Submodule <a name="`catalogIntegrationIcebergRest` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationIcebergRest <a name="CatalogIntegrationIcebergRest" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest snowflake_catalog_integration_iceberg_rest}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest(scope: Construct, id: string, config: CatalogIntegrationIcebergRestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig">CatalogIntegrationIcebergRestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig">CatalogIntegrationIcebergRestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication">putBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication">putOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig">putRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication">putSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetBearerRestAuthentication">resetBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetCatalogNamespace">resetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOauthRestAuthentication">resetOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetRefreshIntervalSeconds">resetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetSigv4RestAuthentication">resetSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBearerRestAuthentication` <a name="putBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication"></a>

```typescript
public putBearerRestAuthentication(value: CatalogIntegrationIcebergRestBearerRestAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---

##### `putOauthRestAuthentication` <a name="putOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication"></a>

```typescript
public putOauthRestAuthentication(value: CatalogIntegrationIcebergRestOauthRestAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---

##### `putRestConfig` <a name="putRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig"></a>

```typescript
public putRestConfig(value: CatalogIntegrationIcebergRestRestConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---

##### `putSigv4RestAuthentication` <a name="putSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication"></a>

```typescript
public putSigv4RestAuthentication(value: CatalogIntegrationIcebergRestSigv4RestAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts"></a>

```typescript
public putTimeouts(value: CatalogIntegrationIcebergRestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

---

##### `resetBearerRestAuthentication` <a name="resetBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetBearerRestAuthentication"></a>

```typescript
public resetBearerRestAuthentication(): void
```

##### `resetCatalogNamespace` <a name="resetCatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetCatalogNamespace"></a>

```typescript
public resetCatalogNamespace(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthRestAuthentication` <a name="resetOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOauthRestAuthentication"></a>

```typescript
public resetOauthRestAuthentication(): void
```

##### `resetRefreshIntervalSeconds` <a name="resetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetRefreshIntervalSeconds"></a>

```typescript
public resetRefreshIntervalSeconds(): void
```

##### `resetSigv4RestAuthentication` <a name="resetSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetSigv4RestAuthentication"></a>

```typescript
public resetSigv4RestAuthentication(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CatalogIntegrationIcebergRest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CatalogIntegrationIcebergRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationIcebergRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthentication">bearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference">CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList">CatalogIntegrationIcebergRestDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthentication">oauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference">CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference">CatalogIntegrationIcebergRestRestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList">CatalogIntegrationIcebergRestShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthentication">sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference">CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference">CatalogIntegrationIcebergRestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthenticationInput">bearerRestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespaceInput">catalogNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthenticationInput">oauthRestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSecondsInput">refreshIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfigInput">restConfigInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthenticationInput">sigv4RestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bearerRestAuthentication`<sup>Required</sup> <a name="bearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthentication"></a>

```typescript
public readonly bearerRestAuthentication: CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference">CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.describeOutput"></a>

```typescript
public readonly describeOutput: CatalogIntegrationIcebergRestDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList">CatalogIntegrationIcebergRestDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `oauthRestAuthentication`<sup>Required</sup> <a name="oauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthentication"></a>

```typescript
public readonly oauthRestAuthentication: CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference">CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference</a>

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfig"></a>

```typescript
public readonly restConfig: CatalogIntegrationIcebergRestRestConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference">CatalogIntegrationIcebergRestRestConfigOutputReference</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.showOutput"></a>

```typescript
public readonly showOutput: CatalogIntegrationIcebergRestShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList">CatalogIntegrationIcebergRestShowOutputList</a>

---

##### `sigv4RestAuthentication`<sup>Required</sup> <a name="sigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthentication"></a>

```typescript
public readonly sigv4RestAuthentication: CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference">CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeouts"></a>

```typescript
public readonly timeouts: CatalogIntegrationIcebergRestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference">CatalogIntegrationIcebergRestTimeoutsOutputReference</a>

---

##### `bearerRestAuthenticationInput`<sup>Optional</sup> <a name="bearerRestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthenticationInput"></a>

```typescript
public readonly bearerRestAuthenticationInput: CatalogIntegrationIcebergRestBearerRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---

##### `catalogNamespaceInput`<sup>Optional</sup> <a name="catalogNamespaceInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespaceInput"></a>

```typescript
public readonly catalogNamespaceInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthRestAuthenticationInput`<sup>Optional</sup> <a name="oauthRestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthenticationInput"></a>

```typescript
public readonly oauthRestAuthenticationInput: CatalogIntegrationIcebergRestOauthRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---

##### `refreshIntervalSecondsInput`<sup>Optional</sup> <a name="refreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSecondsInput"></a>

```typescript
public readonly refreshIntervalSecondsInput: number;
```

- *Type:* number

---

##### `restConfigInput`<sup>Optional</sup> <a name="restConfigInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfigInput"></a>

```typescript
public readonly restConfigInput: CatalogIntegrationIcebergRestRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---

##### `sigv4RestAuthenticationInput`<sup>Optional</sup> <a name="sigv4RestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthenticationInput"></a>

```typescript
public readonly sigv4RestAuthenticationInput: CatalogIntegrationIcebergRestSigv4RestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CatalogIntegrationIcebergRestTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSeconds"></a>

```typescript
public readonly refreshIntervalSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationIcebergRestBearerRestAuthentication <a name="CatalogIntegrationIcebergRestBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestBearerRestAuthentication: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.property.bearerToken">bearerToken</a></code> | <code>string</code> | The bearer token for the identity provider. |

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.property.bearerToken"></a>

```typescript
public readonly bearerToken: string;
```

- *Type:* string

The bearer token for the identity provider.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_token CatalogIntegrationIcebergRest#bearer_token}

---

### CatalogIntegrationIcebergRestConfig <a name="CatalogIntegrationIcebergRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestConfig: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.bearerRestAuthentication">bearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | bearer_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | Specifies the default namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.comment">comment</a></code> | <code>string</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.oauthRestAuthentication">oauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | oauth_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>number</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.sigv4RestAuthentication">sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | sigv4_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#enabled CatalogIntegrationIcebergRest#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#name CatalogIntegrationIcebergRest#name}

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.restConfig"></a>

```typescript
public readonly restConfig: CatalogIntegrationIcebergRestRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#rest_config CatalogIntegrationIcebergRest#rest_config}

---

##### `bearerRestAuthentication`<sup>Optional</sup> <a name="bearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.bearerRestAuthentication"></a>

```typescript
public readonly bearerRestAuthentication: CatalogIntegrationIcebergRestBearerRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

bearer_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_rest_authentication CatalogIntegrationIcebergRest#bearer_rest_authentication}

---

##### `catalogNamespace`<sup>Optional</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

Specifies the default namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_namespace CatalogIntegrationIcebergRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#comment CatalogIntegrationIcebergRest#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthRestAuthentication`<sup>Optional</sup> <a name="oauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.oauthRestAuthentication"></a>

```typescript
public readonly oauthRestAuthentication: CatalogIntegrationIcebergRestOauthRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

oauth_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_rest_authentication CatalogIntegrationIcebergRest#oauth_rest_authentication}

---

##### `refreshIntervalSeconds`<sup>Optional</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.refreshIntervalSeconds"></a>

```typescript
public readonly refreshIntervalSeconds: number;
```

- *Type:* number

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#refresh_interval_seconds CatalogIntegrationIcebergRest#refresh_interval_seconds}

---

##### `sigv4RestAuthentication`<sup>Optional</sup> <a name="sigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.sigv4RestAuthentication"></a>

```typescript
public readonly sigv4RestAuthentication: CatalogIntegrationIcebergRestSigv4RestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

sigv4_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_rest_authentication CatalogIntegrationIcebergRest#sigv4_rest_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CatalogIntegrationIcebergRestTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#timeouts CatalogIntegrationIcebergRest#timeouts}

---

### CatalogIntegrationIcebergRestDescribeOutput <a name="CatalogIntegrationIcebergRestDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestDescribeOutput: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput = { ... }
```


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication = { ... }
```


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication = { ... }
```


### CatalogIntegrationIcebergRestDescribeOutputRestConfig <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestDescribeOutputRestConfig: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig = { ... }
```


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication = { ... }
```


### CatalogIntegrationIcebergRestOauthRestAuthentication <a name="CatalogIntegrationIcebergRestOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestOauthRestAuthentication: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | Specifies one or more scopes for the OAuth token. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Specifies the client ID of the OAuth2 credential. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Specifies the secret of the OAuth2 credential. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthTokenUri">oauthTokenUri</a></code> | <code>string</code> | Specifies URL for the third-party identity provider. |

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_allowed_scopes CatalogIntegrationIcebergRest#oauth_allowed_scopes}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Specifies the client ID of the OAuth2 credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_id CatalogIntegrationIcebergRest#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Specifies the secret of the OAuth2 credential.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_secret CatalogIntegrationIcebergRest#oauth_client_secret}

---

##### `oauthTokenUri`<sup>Optional</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthTokenUri"></a>

```typescript
public readonly oauthTokenUri: string;
```

- *Type:* string

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_token_uri CatalogIntegrationIcebergRest#oauth_token_uri}

---

### CatalogIntegrationIcebergRestRestConfig <a name="CatalogIntegrationIcebergRestRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestRestConfig: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogUri">catalogUri</a></code> | <code>string</code> | Specifies the endpoint URL for the catalog REST API. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.accessDelegationMode">accessDelegationMode</a></code> | <code>string</code> | Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogApiType">catalogApiType</a></code> | <code>string</code> | Specifies the connection type for the catalog API. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Specifies the catalog or identifier to request from your remote catalog service. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.prefix">prefix</a></code> | <code>string</code> | Specifies an optional prefix appended to all API routes. |

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogUri"></a>

```typescript
public readonly catalogUri: string;
```

- *Type:* string

Specifies the endpoint URL for the catalog REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_uri CatalogIntegrationIcebergRest#catalog_uri}

---

##### `accessDelegationMode`<sup>Optional</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.accessDelegationMode"></a>

```typescript
public readonly accessDelegationMode: string;
```

- *Type:* string

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#access_delegation_mode CatalogIntegrationIcebergRest#access_delegation_mode}

---

##### `catalogApiType`<sup>Optional</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogApiType"></a>

```typescript
public readonly catalogApiType: string;
```

- *Type:* string

Specifies the connection type for the catalog API.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_api_type CatalogIntegrationIcebergRest#catalog_api_type}

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Specifies the catalog or identifier to request from your remote catalog service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_name CatalogIntegrationIcebergRest#catalog_name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Specifies an optional prefix appended to all API routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#prefix CatalogIntegrationIcebergRest#prefix}

---

### CatalogIntegrationIcebergRestShowOutput <a name="CatalogIntegrationIcebergRestShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestShowOutput: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput = { ... }
```


### CatalogIntegrationIcebergRestSigv4RestAuthentication <a name="CatalogIntegrationIcebergRestSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestSigv4RestAuthentication: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4IamRole">sigv4IamRole</a></code> | <code>string</code> | Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4ExternalId">sigv4ExternalId</a></code> | <code>string</code> | Specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4SigningRegion">sigv4SigningRegion</a></code> | <code>string</code> | Specifies the AWS Region associated with your API in API Gateway. |

---

##### `sigv4IamRole`<sup>Required</sup> <a name="sigv4IamRole" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4IamRole"></a>

```typescript
public readonly sigv4IamRole: string;
```

- *Type:* string

Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_iam_role CatalogIntegrationIcebergRest#sigv4_iam_role}

---

##### `sigv4ExternalId`<sup>Optional</sup> <a name="sigv4ExternalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4ExternalId"></a>

```typescript
public readonly sigv4ExternalId: string;
```

- *Type:* string

Specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

If you don’t specify this parameter, Snowflake automatically generates a unique external ID when you create a catalog integration. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_external_id CatalogIntegrationIcebergRest#sigv4_external_id}

---

##### `sigv4SigningRegion`<sup>Optional</sup> <a name="sigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4SigningRegion"></a>

```typescript
public readonly sigv4SigningRegion: string;
```

- *Type:* string

Specifies the AWS Region associated with your API in API Gateway.

If you don’t specify this parameter, Snowflake uses the region in which your Snowflake account is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_signing_region CatalogIntegrationIcebergRest#sigv4_signing_region}

---

### CatalogIntegrationIcebergRestTimeouts <a name="CatalogIntegrationIcebergRestTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

const catalogIntegrationIcebergRestTimeouts: catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerToken">bearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerTokenInput"></a>

```typescript
public readonly bearerTokenInput: string;
```

- *Type:* string

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerToken"></a>

```typescript
public readonly bearerToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestBearerRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get"></a>

```typescript
public get(index: number): CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputList <a name="CatalogIntegrationIcebergRestDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get"></a>

```typescript
public get(index: number): CatalogIntegrationIcebergRestDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get"></a>

```typescript
public get(index: number): CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri">oauthTokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthTokenUri`<sup>Required</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```typescript
public readonly oauthTokenUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.bearerRestAuthentication">bearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogSource">catalogSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.oauthRestAuthentication">oauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList">CatalogIntegrationIcebergRestDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.sigv4RestAuthentication">sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.tableFormat">tableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput">CatalogIntegrationIcebergRestDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bearerRestAuthentication`<sup>Required</sup> <a name="bearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.bearerRestAuthentication"></a>

```typescript
public readonly bearerRestAuthentication: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList</a>

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `catalogSource`<sup>Required</sup> <a name="catalogSource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogSource"></a>

```typescript
public readonly catalogSource: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `oauthRestAuthentication`<sup>Required</sup> <a name="oauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.oauthRestAuthentication"></a>

```typescript
public readonly oauthRestAuthentication: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList</a>

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```typescript
public readonly refreshIntervalSeconds: number;
```

- *Type:* number

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.restConfig"></a>

```typescript
public readonly restConfig: CatalogIntegrationIcebergRestDescribeOutputRestConfigList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList">CatalogIntegrationIcebergRestDescribeOutputRestConfigList</a>

---

##### `sigv4RestAuthentication`<sup>Required</sup> <a name="sigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.sigv4RestAuthentication"></a>

```typescript
public readonly sigv4RestAuthentication: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList</a>

---

##### `tableFormat`<sup>Required</sup> <a name="tableFormat" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.tableFormat"></a>

```typescript
public readonly tableFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput">CatalogIntegrationIcebergRestDescribeOutput</a>

---


### CatalogIntegrationIcebergRestDescribeOutputRestConfigList <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get"></a>

```typescript
public get(index: number): CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.accessDelegationMode">accessDelegationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogApiType">catalogApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogUri">catalogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig">CatalogIntegrationIcebergRestDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDelegationMode`<sup>Required</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```typescript
public readonly accessDelegationMode: string;
```

- *Type:* string

---

##### `catalogApiType`<sup>Required</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```typescript
public readonly catalogApiType: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```typescript
public readonly catalogUri: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestDescribeOutputRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig">CatalogIntegrationIcebergRestDescribeOutputRestConfig</a>

---


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get"></a>

```typescript
public get(index: number): CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole">sigv4IamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">sigv4SigningRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sigv4IamRole`<sup>Required</sup> <a name="sigv4IamRole" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```typescript
public readonly sigv4IamRole: string;
```

- *Type:* string

---

##### `sigv4SigningRegion`<sup>Required</sup> <a name="sigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```typescript
public readonly sigv4SigningRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication</a>

---


### CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resetOauthTokenUri">resetOauthTokenUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthTokenUri` <a name="resetOauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resetOauthTokenUri"></a>

```typescript
public resetOauthTokenUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopesInput">oauthAllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUriInput">oauthTokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUri">oauthTokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthAllowedScopesInput`<sup>Optional</sup> <a name="oauthAllowedScopesInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopesInput"></a>

```typescript
public readonly oauthAllowedScopesInput: string[];
```

- *Type:* string[]

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthTokenUriInput`<sup>Optional</sup> <a name="oauthTokenUriInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUriInput"></a>

```typescript
public readonly oauthTokenUriInput: string;
```

- *Type:* string

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthTokenUri`<sup>Required</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```typescript
public readonly oauthTokenUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestOauthRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---


### CatalogIntegrationIcebergRestRestConfigOutputReference <a name="CatalogIntegrationIcebergRestRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetAccessDelegationMode">resetAccessDelegationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogApiType">resetCatalogApiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessDelegationMode` <a name="resetAccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetAccessDelegationMode"></a>

```typescript
public resetAccessDelegationMode(): void
```

##### `resetCatalogApiType` <a name="resetCatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogApiType"></a>

```typescript
public resetCatalogApiType(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationModeInput">accessDelegationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiTypeInput">catalogApiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUriInput">catalogUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationMode">accessDelegationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiType">catalogApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUri">catalogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDelegationModeInput`<sup>Optional</sup> <a name="accessDelegationModeInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationModeInput"></a>

```typescript
public readonly accessDelegationModeInput: string;
```

- *Type:* string

---

##### `catalogApiTypeInput`<sup>Optional</sup> <a name="catalogApiTypeInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiTypeInput"></a>

```typescript
public readonly catalogApiTypeInput: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `catalogUriInput`<sup>Optional</sup> <a name="catalogUriInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUriInput"></a>

```typescript
public readonly catalogUriInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `accessDelegationMode`<sup>Required</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationMode"></a>

```typescript
public readonly accessDelegationMode: string;
```

- *Type:* string

---

##### `catalogApiType`<sup>Required</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiType"></a>

```typescript
public readonly catalogApiType: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUri"></a>

```typescript
public readonly catalogUri: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---


### CatalogIntegrationIcebergRestShowOutputList <a name="CatalogIntegrationIcebergRestShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get"></a>

```typescript
public get(index: number): CatalogIntegrationIcebergRestShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationIcebergRestShowOutputOutputReference <a name="CatalogIntegrationIcebergRestShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput">CatalogIntegrationIcebergRestShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput">CatalogIntegrationIcebergRestShowOutput</a>

---


### CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4ExternalId">resetSigv4ExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4SigningRegion">resetSigv4SigningRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSigv4ExternalId` <a name="resetSigv4ExternalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4ExternalId"></a>

```typescript
public resetSigv4ExternalId(): void
```

##### `resetSigv4SigningRegion` <a name="resetSigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4SigningRegion"></a>

```typescript
public resetSigv4SigningRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalIdInput">sigv4ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRoleInput">sigv4IamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegionInput">sigv4SigningRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalId">sigv4ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRole">sigv4IamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">sigv4SigningRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sigv4ExternalIdInput`<sup>Optional</sup> <a name="sigv4ExternalIdInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalIdInput"></a>

```typescript
public readonly sigv4ExternalIdInput: string;
```

- *Type:* string

---

##### `sigv4IamRoleInput`<sup>Optional</sup> <a name="sigv4IamRoleInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRoleInput"></a>

```typescript
public readonly sigv4IamRoleInput: string;
```

- *Type:* string

---

##### `sigv4SigningRegionInput`<sup>Optional</sup> <a name="sigv4SigningRegionInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegionInput"></a>

```typescript
public readonly sigv4SigningRegionInput: string;
```

- *Type:* string

---

##### `sigv4ExternalId`<sup>Required</sup> <a name="sigv4ExternalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalId"></a>

```typescript
public readonly sigv4ExternalId: string;
```

- *Type:* string

---

##### `sigv4IamRole`<sup>Required</sup> <a name="sigv4IamRole" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```typescript
public readonly sigv4IamRole: string;
```

- *Type:* string

---

##### `sigv4SigningRegion`<sup>Required</sup> <a name="sigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```typescript
public readonly sigv4SigningRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationIcebergRestSigv4RestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---


### CatalogIntegrationIcebergRestTimeoutsOutputReference <a name="CatalogIntegrationIcebergRestTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationIcebergRest } from '@cdktn/provider-snowflake'

new catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CatalogIntegrationIcebergRestTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

---



