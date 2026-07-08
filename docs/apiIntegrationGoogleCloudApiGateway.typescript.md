# `apiIntegrationGoogleCloudApiGateway` Submodule <a name="`apiIntegrationGoogleCloudApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGoogleCloudApiGateway <a name="ApiIntegrationGoogleCloudApiGateway" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway snowflake_api_integration_google_cloud_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway(scope: Construct, id: string, config: ApiIntegrationGoogleCloudApiGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig">ApiIntegrationGoogleCloudApiGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig">ApiIntegrationGoogleCloudApiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiIntegrationGoogleCloudApiGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationGoogleCloudApiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationGoogleCloudApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGoogleCloudApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput">googleAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience">googleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiIntegrationGoogleCloudApiGatewayDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput"></a>

```typescript
public readonly showOutput: ApiIntegrationGoogleCloudApiGatewayShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `googleAudienceInput`<sup>Optional</sup> <a name="googleAudienceInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput"></a>

```typescript
public readonly googleAudienceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiIntegrationGoogleCloudApiGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience"></a>

```typescript
public readonly googleAudience: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGoogleCloudApiGatewayConfig <a name="ApiIntegrationGoogleCloudApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationGoogleCloudApiGatewayConfig: apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience">googleAudience</a></code> | <code>string</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience"></a>

```typescript
public readonly googleAudience: string;
```

- *Type:* string

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationGoogleCloudApiGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

### ApiIntegrationGoogleCloudApiGatewayDescribeOutput <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationGoogleCloudApiGatewayDescribeOutput: apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput = { ... }
```


### ApiIntegrationGoogleCloudApiGatewayShowOutput <a name="ApiIntegrationGoogleCloudApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationGoogleCloudApiGatewayShowOutput: apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput = { ... }
```


### ApiIntegrationGoogleCloudApiGatewayTimeouts <a name="ApiIntegrationGoogleCloudApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

const apiIntegrationGoogleCloudApiGatewayTimeouts: apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGoogleCloudApiGatewayDescribeOutputList <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount">googleApiServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience">googleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `googleApiServiceAccount`<sup>Required</sup> <a name="googleApiServiceAccount" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```typescript
public readonly googleApiServiceAccount: string;
```

- *Type:* string

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience"></a>

```typescript
public readonly googleAudience: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationGoogleCloudApiGatewayDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputList <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationGoogleCloudApiGatewayShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiIntegrationGoogleCloudApiGateway } from '@cdktn/provider-snowflake'

new apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiIntegrationGoogleCloudApiGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---



