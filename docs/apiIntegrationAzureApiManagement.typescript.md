# `apiIntegrationAzureApiManagement` Submodule <a name="`apiIntegrationAzureApiManagement` Submodule" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationAzureApiManagement <a name="ApiIntegrationAzureApiManagement" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management snowflake_api_integration_azure_api_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

new apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement(scope: Construct, id: string, config: ApiIntegrationAzureApiManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig">ApiIntegrationAzureApiManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig">ApiIntegrationAzureApiManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiIntegrationAzureApiManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationAzureApiManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationAzureApiManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationAzureApiManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList">ApiIntegrationAzureApiManagementDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList">ApiIntegrationAzureApiManagementShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference">ApiIntegrationAzureApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationIdInput">azureAdApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiIntegrationAzureApiManagementDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList">ApiIntegrationAzureApiManagementDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.showOutput"></a>

```typescript
public readonly showOutput: ApiIntegrationAzureApiManagementShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList">ApiIntegrationAzureApiManagementShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationAzureApiManagementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference">ApiIntegrationAzureApiManagementTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `azureAdApplicationIdInput`<sup>Optional</sup> <a name="azureAdApplicationIdInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationIdInput"></a>

```typescript
public readonly azureAdApplicationIdInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiIntegrationAzureApiManagementTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationId"></a>

```typescript
public readonly azureAdApplicationId: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationAzureApiManagementConfig <a name="ApiIntegrationAzureApiManagementConfig" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

const apiIntegrationAzureApiManagementConfig: apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>string</code> | The 'Application (client) ID' of the Azure AD app for your Azure API Management instance. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#api_allowed_prefixes ApiIntegrationAzureApiManagement#api_allowed_prefixes}

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureAdApplicationId"></a>

```typescript
public readonly azureAdApplicationId: string;
```

- *Type:* string

The 'Application (client) ID' of the Azure AD app for your Azure API Management instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#azure_ad_application_id ApiIntegrationAzureApiManagement#azure_ad_application_id}

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#azure_tenant_id ApiIntegrationAzureApiManagement#azure_tenant_id}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#enabled ApiIntegrationAzureApiManagement#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#name ApiIntegrationAzureApiManagement#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#api_blocked_prefixes ApiIntegrationAzureApiManagement#api_blocked_prefixes}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

Snowflake returns a masked value for this field in DESCRIBE output, so external changes to it cannot be detected. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#api_key ApiIntegrationAzureApiManagement#api_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#comment ApiIntegrationAzureApiManagement#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationAzureApiManagementTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#timeouts ApiIntegrationAzureApiManagement#timeouts}

---

### ApiIntegrationAzureApiManagementDescribeOutput <a name="ApiIntegrationAzureApiManagementDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

const apiIntegrationAzureApiManagementDescribeOutput: apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput = { ... }
```


### ApiIntegrationAzureApiManagementShowOutput <a name="ApiIntegrationAzureApiManagementShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

const apiIntegrationAzureApiManagementShowOutput: apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput = { ... }
```


### ApiIntegrationAzureApiManagementTimeouts <a name="ApiIntegrationAzureApiManagementTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

const apiIntegrationAzureApiManagementTimeouts: apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationAzureApiManagementDescribeOutputList <a name="ApiIntegrationAzureApiManagementDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

new apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationAzureApiManagementDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationAzureApiManagementDescribeOutputOutputReference <a name="ApiIntegrationAzureApiManagementDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

new apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureConsentUrl">azureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput">ApiIntegrationAzureApiManagementDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```typescript
public readonly azureAdApplicationId: string;
```

- *Type:* string

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureConsentUrl"></a>

```typescript
public readonly azureConsentUrl: string;
```

- *Type:* string

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```typescript
public readonly azureMultiTenantAppName: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationAzureApiManagementDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput">ApiIntegrationAzureApiManagementDescribeOutput</a>

---


### ApiIntegrationAzureApiManagementShowOutputList <a name="ApiIntegrationAzureApiManagementShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

new apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationAzureApiManagementShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationAzureApiManagementShowOutputOutputReference <a name="ApiIntegrationAzureApiManagementShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

new apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput">ApiIntegrationAzureApiManagementShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationAzureApiManagementShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput">ApiIntegrationAzureApiManagementShowOutput</a>

---


### ApiIntegrationAzureApiManagementTimeoutsOutputReference <a name="ApiIntegrationAzureApiManagementTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiIntegrationAzureApiManagement } from '@cdktn/provider-snowflake'

new apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiIntegrationAzureApiManagementTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---



