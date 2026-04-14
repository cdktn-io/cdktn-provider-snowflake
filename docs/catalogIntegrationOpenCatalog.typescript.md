# `catalogIntegrationOpenCatalog` Submodule <a name="`catalogIntegrationOpenCatalog` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationOpenCatalog <a name="CatalogIntegrationOpenCatalog" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog snowflake_catalog_integration_open_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog(scope: Construct, id: string, config: CatalogIntegrationOpenCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig">CatalogIntegrationOpenCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig">CatalogIntegrationOpenCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication">putRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig">putRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetCatalogNamespace">resetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetRefreshIntervalSeconds">resetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRestAuthentication` <a name="putRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication"></a>

```typescript
public putRestAuthentication(value: CatalogIntegrationOpenCatalogRestAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---

##### `putRestConfig` <a name="putRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig"></a>

```typescript
public putRestConfig(value: CatalogIntegrationOpenCatalogRestConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts"></a>

```typescript
public putTimeouts(value: CatalogIntegrationOpenCatalogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

---

##### `resetCatalogNamespace` <a name="resetCatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetCatalogNamespace"></a>

```typescript
public resetCatalogNamespace(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRefreshIntervalSeconds` <a name="resetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetRefreshIntervalSeconds"></a>

```typescript
public resetRefreshIntervalSeconds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CatalogIntegrationOpenCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CatalogIntegrationOpenCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationOpenCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList">CatalogIntegrationOpenCatalogDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthentication">restAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference">CatalogIntegrationOpenCatalogRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference">CatalogIntegrationOpenCatalogRestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList">CatalogIntegrationOpenCatalogShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference">CatalogIntegrationOpenCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespaceInput">catalogNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSecondsInput">refreshIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthenticationInput">restAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfigInput">restConfigInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.describeOutput"></a>

```typescript
public readonly describeOutput: CatalogIntegrationOpenCatalogDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList">CatalogIntegrationOpenCatalogDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `restAuthentication`<sup>Required</sup> <a name="restAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthentication"></a>

```typescript
public readonly restAuthentication: CatalogIntegrationOpenCatalogRestAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference">CatalogIntegrationOpenCatalogRestAuthenticationOutputReference</a>

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfig"></a>

```typescript
public readonly restConfig: CatalogIntegrationOpenCatalogRestConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference">CatalogIntegrationOpenCatalogRestConfigOutputReference</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.showOutput"></a>

```typescript
public readonly showOutput: CatalogIntegrationOpenCatalogShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList">CatalogIntegrationOpenCatalogShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeouts"></a>

```typescript
public readonly timeouts: CatalogIntegrationOpenCatalogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference">CatalogIntegrationOpenCatalogTimeoutsOutputReference</a>

---

##### `catalogNamespaceInput`<sup>Optional</sup> <a name="catalogNamespaceInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespaceInput"></a>

```typescript
public readonly catalogNamespaceInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `refreshIntervalSecondsInput`<sup>Optional</sup> <a name="refreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSecondsInput"></a>

```typescript
public readonly refreshIntervalSecondsInput: number;
```

- *Type:* number

---

##### `restAuthenticationInput`<sup>Optional</sup> <a name="restAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthenticationInput"></a>

```typescript
public readonly restAuthenticationInput: CatalogIntegrationOpenCatalogRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---

##### `restConfigInput`<sup>Optional</sup> <a name="restConfigInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfigInput"></a>

```typescript
public readonly restConfigInput: CatalogIntegrationOpenCatalogRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CatalogIntegrationOpenCatalogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSeconds"></a>

```typescript
public readonly refreshIntervalSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationOpenCatalogConfig <a name="CatalogIntegrationOpenCatalogConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogConfig: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restAuthentication">restAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.comment">comment</a></code> | <code>string</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>number</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#enabled CatalogIntegrationOpenCatalog#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#name CatalogIntegrationOpenCatalog#name}

---

##### `restAuthentication`<sup>Required</sup> <a name="restAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restAuthentication"></a>

```typescript
public readonly restAuthentication: CatalogIntegrationOpenCatalogRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_authentication CatalogIntegrationOpenCatalog#rest_authentication}

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restConfig"></a>

```typescript
public readonly restConfig: CatalogIntegrationOpenCatalogRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_config CatalogIntegrationOpenCatalog#rest_config}

---

##### `catalogNamespace`<sup>Optional</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_namespace CatalogIntegrationOpenCatalog#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#comment CatalogIntegrationOpenCatalog#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalSeconds`<sup>Optional</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.refreshIntervalSeconds"></a>

```typescript
public readonly refreshIntervalSeconds: number;
```

- *Type:* number

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#refresh_interval_seconds CatalogIntegrationOpenCatalog#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CatalogIntegrationOpenCatalogTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#timeouts CatalogIntegrationOpenCatalog#timeouts}

---

### CatalogIntegrationOpenCatalogDescribeOutput <a name="CatalogIntegrationOpenCatalogDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogDescribeOutput: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput = { ... }
```


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogDescribeOutputRestAuthentication: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication = { ... }
```


### CatalogIntegrationOpenCatalogDescribeOutputRestConfig <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogDescribeOutputRestConfig: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig = { ... }
```


### CatalogIntegrationOpenCatalogRestAuthentication <a name="CatalogIntegrationOpenCatalogRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogRestAuthentication: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | Specifies one or more scopes for the OAuth token. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthTokenUri">oauthTokenUri</a></code> | <code>string</code> | Specifies URL for the third-party identity provider. |

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_allowed_scopes CatalogIntegrationOpenCatalog#oauth_allowed_scopes}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_id CatalogIntegrationOpenCatalog#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_secret CatalogIntegrationOpenCatalog#oauth_client_secret}

---

##### `oauthTokenUri`<sup>Optional</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthTokenUri"></a>

```typescript
public readonly oauthTokenUri: string;
```

- *Type:* string

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_token_uri CatalogIntegrationOpenCatalog#oauth_token_uri}

---

### CatalogIntegrationOpenCatalogRestConfig <a name="CatalogIntegrationOpenCatalogRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogRestConfig: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Specifies the name of the catalog to use in Open Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogUri">catalogUri</a></code> | <code>string</code> | Specifies Open Catalog account URL. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.accessDelegationMode">accessDelegationMode</a></code> | <code>string</code> | Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogApiType">catalogApiType</a></code> | <code>string</code> | Specifies how Snowflake connects to Open Catalog. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Specifies the name of the catalog to use in Open Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_name CatalogIntegrationOpenCatalog#catalog_name}

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogUri"></a>

```typescript
public readonly catalogUri: string;
```

- *Type:* string

Specifies Open Catalog account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_uri CatalogIntegrationOpenCatalog#catalog_uri}

---

##### `accessDelegationMode`<sup>Optional</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.accessDelegationMode"></a>

```typescript
public readonly accessDelegationMode: string;
```

- *Type:* string

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#access_delegation_mode CatalogIntegrationOpenCatalog#access_delegation_mode}

---

##### `catalogApiType`<sup>Optional</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogApiType"></a>

```typescript
public readonly catalogApiType: string;
```

- *Type:* string

Specifies how Snowflake connects to Open Catalog.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_api_type CatalogIntegrationOpenCatalog#catalog_api_type}

---

### CatalogIntegrationOpenCatalogShowOutput <a name="CatalogIntegrationOpenCatalogShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogShowOutput: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput = { ... }
```


### CatalogIntegrationOpenCatalogTimeouts <a name="CatalogIntegrationOpenCatalogTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

const catalogIntegrationOpenCatalogTimeouts: catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationOpenCatalogDescribeOutputList <a name="CatalogIntegrationOpenCatalogDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get"></a>

```typescript
public get(index: number): CatalogIntegrationOpenCatalogDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationOpenCatalogDescribeOutputOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogSource">catalogSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restAuthentication">restAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList">CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restConfig">restConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList">CatalogIntegrationOpenCatalogDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.tableFormat">tableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput">CatalogIntegrationOpenCatalogDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogNamespace"></a>

```typescript
public readonly catalogNamespace: string;
```

- *Type:* string

---

##### `catalogSource`<sup>Required</sup> <a name="catalogSource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogSource"></a>

```typescript
public readonly catalogSource: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```typescript
public readonly refreshIntervalSeconds: number;
```

- *Type:* number

---

##### `restAuthentication`<sup>Required</sup> <a name="restAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restAuthentication"></a>

```typescript
public readonly restAuthentication: CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList">CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList</a>

---

##### `restConfig`<sup>Required</sup> <a name="restConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restConfig"></a>

```typescript
public readonly restConfig: CatalogIntegrationOpenCatalogDescribeOutputRestConfigList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList">CatalogIntegrationOpenCatalogDescribeOutputRestConfigList</a>

---

##### `tableFormat`<sup>Required</sup> <a name="tableFormat" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.tableFormat"></a>

```typescript
public readonly tableFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationOpenCatalogDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput">CatalogIntegrationOpenCatalogDescribeOutput</a>

---


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get"></a>

```typescript
public get(index: number): CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthTokenUri">oauthTokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication">CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthTokenUri`<sup>Required</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```typescript
public readonly oauthTokenUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication">CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication</a>

---


### CatalogIntegrationOpenCatalogDescribeOutputRestConfigList <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get"></a>

```typescript
public get(index: number): CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.accessDelegationMode">accessDelegationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogApiType">catalogApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogUri">catalogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig">CatalogIntegrationOpenCatalogDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDelegationMode`<sup>Required</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```typescript
public readonly accessDelegationMode: string;
```

- *Type:* string

---

##### `catalogApiType`<sup>Required</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```typescript
public readonly catalogApiType: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```typescript
public readonly catalogUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationOpenCatalogDescribeOutputRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig">CatalogIntegrationOpenCatalogDescribeOutputRestConfig</a>

---


### CatalogIntegrationOpenCatalogRestAuthenticationOutputReference <a name="CatalogIntegrationOpenCatalogRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resetOauthTokenUri">resetOauthTokenUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthTokenUri` <a name="resetOauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resetOauthTokenUri"></a>

```typescript
public resetOauthTokenUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopesInput">oauthAllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUriInput">oauthTokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUri">oauthTokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthAllowedScopesInput`<sup>Optional</sup> <a name="oauthAllowedScopesInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopesInput"></a>

```typescript
public readonly oauthAllowedScopesInput: string[];
```

- *Type:* string[]

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthTokenUriInput`<sup>Optional</sup> <a name="oauthTokenUriInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUriInput"></a>

```typescript
public readonly oauthTokenUriInput: string;
```

- *Type:* string

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthTokenUri`<sup>Required</sup> <a name="oauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```typescript
public readonly oauthTokenUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationOpenCatalogRestAuthentication;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---


### CatalogIntegrationOpenCatalogRestConfigOutputReference <a name="CatalogIntegrationOpenCatalogRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetAccessDelegationMode">resetAccessDelegationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetCatalogApiType">resetCatalogApiType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessDelegationMode` <a name="resetAccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetAccessDelegationMode"></a>

```typescript
public resetAccessDelegationMode(): void
```

##### `resetCatalogApiType` <a name="resetCatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetCatalogApiType"></a>

```typescript
public resetCatalogApiType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationModeInput">accessDelegationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiTypeInput">catalogApiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUriInput">catalogUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationMode">accessDelegationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiType">catalogApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUri">catalogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessDelegationModeInput`<sup>Optional</sup> <a name="accessDelegationModeInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationModeInput"></a>

```typescript
public readonly accessDelegationModeInput: string;
```

- *Type:* string

---

##### `catalogApiTypeInput`<sup>Optional</sup> <a name="catalogApiTypeInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiTypeInput"></a>

```typescript
public readonly catalogApiTypeInput: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `catalogUriInput`<sup>Optional</sup> <a name="catalogUriInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUriInput"></a>

```typescript
public readonly catalogUriInput: string;
```

- *Type:* string

---

##### `accessDelegationMode`<sup>Required</sup> <a name="accessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationMode"></a>

```typescript
public readonly accessDelegationMode: string;
```

- *Type:* string

---

##### `catalogApiType`<sup>Required</sup> <a name="catalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiType"></a>

```typescript
public readonly catalogApiType: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogUri`<sup>Required</sup> <a name="catalogUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUri"></a>

```typescript
public readonly catalogUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationOpenCatalogRestConfig;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---


### CatalogIntegrationOpenCatalogShowOutputList <a name="CatalogIntegrationOpenCatalogShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get"></a>

```typescript
public get(index: number): CatalogIntegrationOpenCatalogShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CatalogIntegrationOpenCatalogShowOutputOutputReference <a name="CatalogIntegrationOpenCatalogShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput">CatalogIntegrationOpenCatalogShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogIntegrationOpenCatalogShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput">CatalogIntegrationOpenCatalogShowOutput</a>

---


### CatalogIntegrationOpenCatalogTimeoutsOutputReference <a name="CatalogIntegrationOpenCatalogTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer"></a>

```typescript
import { catalogIntegrationOpenCatalog } from '@cdktn/provider-snowflake'

new catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CatalogIntegrationOpenCatalogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

---



